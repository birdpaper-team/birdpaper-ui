import { ref, computed } from "vue";
import { useGlobalConfig } from "./use-namespace";

const modalCount = ref(0);
const zIndexBase = 3000;

export function useModalZIndex() {
  const { zIndex: globalZIndex } = useGlobalConfig();
  const currentZIndex = computed(() => {
    const base = globalZIndex?.value ?? zIndexBase;
    return base + modalCount.value;
  });

  const increase = () => {
    modalCount.value++;
  };

  const decrease = () => {
    if (modalCount.value > 0) {
      modalCount.value--;
    }
  };

  return {
    currentZIndex,
    increase,
    decrease,
  };
}