import { useEffect, type RefObject } from "react";

type Handler = (event: MouseEvent | TouchEvent) => void;

export function useOutsideClick<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  handler: Handler,
  mouseEvent: "mousedown" | "mouseup" = "mousedown",
): void {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref?.current;

      if (!el || el.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    document.addEventListener(mouseEvent, listener);
    document.addEventListener("touchend", listener);

    return () => {
      document.removeEventListener(mouseEvent, listener);
      document.removeEventListener("touchend", listener);
    };
  }, [ref, handler, mouseEvent]);
}
