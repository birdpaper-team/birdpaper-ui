import { ref, computed } from "vue";
import { useGlobalConfig } from "./use-namespace";

const modalCount = ref(0);
const zIndexBase = 3000;
let layerSeq = 0;
const layerStack: number[] = [];
const topLayerId = ref(0);

export function useModalZIndex() {
  const { zIndex: globalZIndex } = useGlobalConfig();
  const currentZIndex = computed(() => {
    const base = globalZIndex?.value ?? zIndexBase;
    return base + modalCount.value;
  });

  const layerId = ++layerSeq;

  const increase = () => {
    modalCount.value++;
    layerStack.push(layerId);
    topLayerId.value = layerId;
  };

  const decrease = () => {
    if (modalCount.value > 0) {
      modalCount.value--;
    }
    const idx = layerStack.lastIndexOf(layerId);
    if (idx >= 0) layerStack.splice(idx, 1);
    topLayerId.value = layerStack[layerStack.length - 1] ?? 0;
  };

  const isTopLayer = () => topLayerId.value === layerId;

  return {
    currentZIndex,
    increase,
    decrease,
    isTopLayer,
  };
}

/** @internal reset for tests */
export function resetModalZIndex() {
  modalCount.value = 0;
  topLayerId.value = 0;
  layerStack.length = 0;
}
