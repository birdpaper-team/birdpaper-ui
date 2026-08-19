import { onMounted, onUnmounted, watch, isRef, type Ref } from "vue";

/**
 * Register an event listener that auto-cleans on unmount.
 * Safe to call after mount — attaches immediately if already available.
 */
export function useEventListener<K extends keyof WindowEventMap>(
  target: Window,
  event: K,
  handler: (e: WindowEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions
): () => void;
export function useEventListener<K extends keyof DocumentEventMap>(
  target: Document,
  event: K,
  handler: (e: DocumentEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions
): () => void;
export function useEventListener<K extends keyof HTMLElementEventMap>(
  target: HTMLElement | Ref<HTMLElement | null | undefined>,
  event: K,
  handler: (e: HTMLElementEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions
): () => void;
export function useEventListener(
  target: Window | Document | HTMLElement | Ref<HTMLElement | null | undefined>,
  event: string,
  handler: (e: Event) => void,
  options?: boolean | AddEventListenerOptions
): () => void {
  let attached: EventTarget | null = null;

  const getTarget = (): EventTarget | null => {
    if (typeof window === "undefined") return null;
    if (isRef(target)) return target.value ?? null;
    return target as EventTarget;
  };

  const addListener = () => {
    const el = getTarget();
    if (!el || typeof (el as any).addEventListener !== "function" || attached === el) return;
    removeListener();
    el.addEventListener(event, handler, options);
    attached = el;
  };

  const removeListener = () => {
    if (!attached) return;
    attached.removeEventListener(event, handler, options);
    attached = null;
  };

  addListener();
  onMounted(addListener);
  onUnmounted(removeListener);

  if (isRef(target)) {
    watch(target, () => {
      addListener();
    });
  }

  return removeListener;
}
