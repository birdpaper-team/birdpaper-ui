import { onMounted, onUnmounted, type Ref, watch } from "vue";

/**
 * Register an event listener that auto-cleans on unmount.
 * @param target - Event target (window, document, element, or ref)
 * @param event - Event name
 * @param handler - Event handler
 * @param options - AddEventListener options
 */
export function useEventListener<K extends keyof WindowEventMap>(
  target: Window,
  event: K,
  handler: (e: WindowEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions
): void;
export function useEventListener<K extends keyof DocumentEventMap>(
  target: Document,
  event: K,
  handler: (e: DocumentEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions
): void;
export function useEventListener<K extends keyof HTMLElementEventMap>(
  target: HTMLElement | Ref<HTMLElement | null | undefined>,
  event: K,
  handler: (e: HTMLElementEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions
): void;
export function useEventListener(
  target: Window | Document | HTMLElement | Ref<HTMLElement | null | undefined>,
  event: string,
  handler: (e: Event) => void,
  options?: boolean | AddEventListenerOptions
) {
  const getTarget = () => {
    if (typeof window === "undefined") return null;
    if ("value" in target) return target.value;
    return target;
  };

  const addListener = () => {
    const el = getTarget();
    if (el) {
      el.addEventListener(event, handler, options);
    }
  };

  const removeListener = () => {
    const el = getTarget();
    if (el) {
      el.removeEventListener(event, handler, options);
    }
  };

  onMounted(addListener);
  onUnmounted(removeListener);

  // If target is a ref, watch for changes
  if ("value" in target) {
    watch(target, (newVal, oldVal) => {
      if (oldVal) oldVal.removeEventListener(event, handler, options);
      if (newVal) newVal.addEventListener(event, handler, options);
    });
  }
}
