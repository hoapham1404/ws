import { Fira_Mono } from "next/font/google";
import { useFullScreen } from "@/components/(prank-screen)/hooks/useFullScreen";

const monoFont = Fira_Mono({
  weight: "400",
  subsets: ["latin"],
});

export default function FakeBlueScreen() {
  const { isFullscreen } = useFullScreen();
  return (
    <div
      className={`${monoFont.className}   bg-[#004091] text-white h-full p-8 cursor-pointer ${isFullscreen
        ? "fixed inset-0 z-50 flex items-center justify-center"
        : ""
        }`}
    >
      <div
        className={`${isFullscreen ? "max-w-[80%] pt-[5%] text-2xl space-y-8" : "text-[.52rem] space-y-3"}`}
      >
        <p>
          A problem has been detected and windows has been shut down to prevent
          damage to your computer.
        </p>

        <p>
          The problem seems to be caused by the following file: SPCMDCON.SYS
          PAGE_FAULT_IN_NONPAGED_AREA
        </p>

        <p>
          If this is the first time you&apos;ve seen this stop error screen,
          restart your computer. If this screen appears again, follow these
          steps:
        </p>

        <p>
          Check to make sure any new hardware or software is properly installed.
          If this is a new installation, ask your hardware or software
          manufacturer for any windows updates you might need.
        </p>

        <p>
          If problems continue, disable or remove any newly installed hardware
          or software. Disable BIOS memory options such as caching or shadowing.
          If you need to use Safe Mode to remove or disable components, restart
          your computer, press F8 to select Advanced startup options, and then
          select Safe Mode.
        </p>

        <p>Technical information:</p>

        <p>
          *** STOP: 0x00000050 (0xFD3094C2, 0x00000001, 0xFBFE7617, 0x00000000)
        </p>

        <p>
          *** SPCMDCON. SYS - Address FBFE7617 base at FBFE5000, Datestamp
          3d6dd67c
        </p>
      </div>
    </div>
  );
}
