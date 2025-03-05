import { useEffect, useCallback, useRef } from "react";
import { useHackerTyperStore } from "./hackerTyperStore";
import { useFullScreen } from "../hooks/useFullScreen";

const HackerTyper = () => {
  const { text, speed, setText } = useHackerTyperStore();
  const terminalRef = useRef<HTMLDivElement>(null);
  const { isFullscreen } = useFullScreen();

  const hackerCode = `#include <linux/kernel.h>
  #include <kunit/test.h>

  #define CREATE_TRACE_POINTS

  static int kernel_init(void *);

  bool early_boot_irqs_disabled __read_mostly;

  enum system_states system_state __read_mostly;
  EXPORT_SYMBOL(system_state);

  #define MAX_INIT_ARGS CONFIG_INIT_ENV_ARG_LIMIT
  #define MAX_INIT_ENVS CONFIG_INIT_ENV_ARG_LIMIT

  void (*__initdata late_time_init)(void);

  char __initdata boot_command_line[COMMAND_LINE_SIZE];
  char *saved_command_line __ro_after_init;
  unsigned int saved_command_line_len __ro_after_init;
  static char *static_command_line;
  static char *extra_command_line;
  static char *extra_init_args;

  #ifdef CONFIG_BOOT_CONFIG
  static bool bootconfig_found;
  static size_t initargs_offs;
  #else
  # define bootconfig_found false
  # define initargs_offs 0
  #endif

  static char *execute_command;
  static char *ramdisk_execute_command = "/init";

  bool static_key_initialized __read_mostly;
  EXPORT_SYMBOL_GPL(static_key_initialized);

  unsigned int reset_devices;
  EXPORT_SYMBOL(reset_devices);

  static int __init set_reset_devices(char *str)
  {
	reset_devices = 1;
	return 1;
  }

  __setup("reset_devices", set_reset_devices);

  static const char *argv_init[MAX_INIT_ARGS+2] = { "init", NULL, };
  const char *envp_init[MAX_INIT_ENVS+2] = { "HOME=/", "TERM=linux", NULL, };
  static const char *panic_later, *panic_param;

  static bool __init obsolete_checksetup(char *line)
  {
	const struct obs_kernel_param *p;
	bool had_early_param = false;

	p = __setup_start;
	do {
		int n = strlen(p->str);
		if (parameqn(line, p->str, n)) {
			if (p->early) {
				/* Already done in parse_early_param?
				 * (Needs exact match on param part).
				 * Keep iterating, as we can have early
				 * params and __setups of same names 8( */
				if (line[n] == '�' || line[n] == '=')
					had_early_param = true;
			} else if (!p->setup_func) {
				pr_warn("Parameter %s is obsolete, ignored
  ",
					p->str);
				return true;
			} else if (p->setup_func(line + n))
				return true;
		}
		p++;
	} while (p < __setup_end);

	return had_early_param;
  }

  unsigned long loops_per_jiffy = (1<<12);
  EXPORT_SYMBOL(loops_per_jiffy);

  static int __init debug_kernel(char *str)
  {
	console_loglevel = CONSOLE_LOGLEVEL_DEBUG;
	return 0;
  }

  static int __init quiet_kernel(char *str)
  {
	console_loglevel = CONSOLE_LOGLEVEL_QUIET;
	return 0;
  }

  early_param("debug", debug_kernel);
  early_param("quiet", quiet_kernel);

  static int __init loglevel(char *str)
  {
	int newlevel;

	/*
	 * Only update loglevel value when a correct setting was passed,
	 * to prevent blind crashes (when loglevel being set to 0) that
	 * are quite hard to debug
	 */
	if (get_option(&str, &newlevel)) {
		console_loglevel = newlevel;
		return 0;
	}

	return -EINVAL;
  }

  early_param("loglevel", loglevel);

  #ifdef CONFIG_BLK_DEV_INITRD
  static void * __init get_boot_config_from_initrd(size_t *_size)
  {
	u32 size, csum;
	char *data;
	u32 *hdr;
	int i;

	if (!initrd_end)
		return NULL;

	data = (char *)initrd_end - BOOTCONFIG_MAGIC_LEN;
	/*
	 * Since Grub may align the size of initrd to 4, we must
	 * check the preceding 3 bytes as well.
	 */
	for (i = 0; i < 4; i++) {
		if (!memcmp(data, BOOTCONFIG_MAGIC, BOOTCONFIG_MAGIC_LEN))
			goto found;
		data--;
	}
	return NULL;

  found:
	hdr = (u32 *)(data - 8);
	size = le32_to_cpu(hdr[0]);
	csum = le32_to_cpu(hdr[1]);

	data = ((void *)hdr) - size;
	if ((unsigned long)data < initrd_start) {
		pr_err("bootconfig size %d is greater than initrd size %ld
  ",
			size, initrd_end - initrd_start);
		return NULL;
	}

	if (xbc_calc_checksum(data, size) != csum) {
		pr_err("bootconfig checksum failed
  ");
		return NULL;
	}

	/* Remove bootconfig from initramfs/initrd */
	initrd_end = (unsigned long)data;
	if (_size)
		*_size = size;

	return data;
  }
  #else
  static void * __init get_boot_config_from_initrd(size_t *_size)
  {
	return NULL;
  }
  #endif

  #ifdef CONFIG_BOOT_CONFIG

  static char xbc_namebuf[XBC_KEYLEN_MAX] __initdata;

  #define rest(dst, end) ((end) > (dst) ? (end) - (dst) : 0)

  static int __init xbc_snprint_cmdline(char *buf, size_t size,
				      struct xbc_node *root)
  {
	struct xbc_node *knode, *vnode;
	char *end = buf + size;
	const char *val;
	int ret;

	xbc_node_for_each_key_value(root, knode, val) {
		ret = xbc_node_compose_key_after(root, knode,
					xbc_namebuf, XBC_KEYLEN_MAX);
		if (ret < 0)
			return ret;

		vnode = xbc_node_get_child(knode);
		if (!vnode) {
			ret = snprintf(buf, rest(buf, end), "%s ", xbc_namebuf);
			if (ret < 0)
				return ret;
			buf += ret;
			continue;
		}
		xbc_array_for_each_value(vnode, val) {
			ret = snprintf(buf, rest(buf, end), "%s="%s" ",
				       xbc_namebuf, val);
			if (ret < 0)
				return ret;
			buf += ret;
		}
	}

	return buf - (end - size);
  }
  #undef rest

  static char * __init xbc_make_cmdline(const char *key)
  {
	struct xbc_node *root;
	char *new_cmdline;
	int ret, len = 0;

	root = xbc_find_node(key);
`;

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault();
      }

      setText(
        text +
        hackerCode.slice(
          text.length % hackerCode.length,
          (text.length % hackerCode.length) + speed,
        ),
      );
    },
    [text, speed, setText, hackerCode],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [text]);

  const renderFormattedCode = () => {
    if (!text) return null;

    const lines = text.split("\n");
    const formattedLines = lines.map((line) => {
      const highlightedLine = line
        .replace(
          /(#include\s+<.*?>)/g,
          '<span style="color: #00ff00;">$1</span>',
        )
        .replace(/(#define\s+\w+)/g, '<span style="color: #00ff00;">$1</span>')
        .replace(
          /(static|void|bool|enum|char)(\s+)/g,
          '<span style="color: #00ff00;">$1</span>$2',
        )
        .replace(/(EXPORT_SYMBOL)/g, '<span style="color: #00ff00;">$1</span>');

      return `<div style="white-space: pre;">${highlightedLine}</div>`;
    });

    return (
      <div dangerouslySetInnerHTML={{ __html: formattedLines.join("") }} />
    );
  };

  return (
    <div
      ref={terminalRef}
      className={`p-4 h-full w-full overflow-auto bg-black font-mono select-none ${isFullscreen ? "text-normal" : "text-[.8rem]"
        }`}
      style={{
        boxShadow: "0 0 20px rgba(0, 255, 0, 0.2)",
        color: "#00ff00",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {renderFormattedCode()}
    </div>
  );
};

export default HackerTyper;
