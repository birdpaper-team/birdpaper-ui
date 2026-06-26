import { onMounted, onUnmounted, type Ref } from "vue";

/**
 * Detect clicks outside of a target element.
 * @param target - The element ref to watch
 * @param handler - Callback when a click outside is detected
 * @param options.ignore - Optional array of refs to ignore (e.g. trigger elements)
 */
export function useClickOutside(
  target: Ref<HTMLElement | null | undefined>,
  handler: (e: MouseEvent) => void,
  options: { ignore?: Ref<HTMLElement | null | undefined>[] } = {}
) {
  const listener = (e: MouseEvent) => {
    const el = target.value;
    if (!el || el.contains(e.target as Node)) return;

    // Check ignored elements
    if (options.ignore?.some((ref) => ref.value?.contains(e.target as Node))) {
      return;
    }

    handler(e);
  };

  onMounted(() => {
    document.addEventListener("mousedown", listener);
  });

  onUnmounted(() => {
    document.removeEventListener("mousedown", listener);
  });
}
