import { PropType, Fragment, mergeProps, h, computed } from "vue";
import { useNamespace } from "@birdpaper-ui/hooks";
import { defineComponent } from "vue";
import { getAllElements } from "@birdpaper-ui/components/utils/dom";
import { get } from "radash";

export default defineComponent({
  name: "CheckboxGroup",
  props: {
    /**
     * @description Model value.
     */
    modelValue: {
      type: Array,
    },
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit, slots }) {
    const { clsBlockName } = useNamespace("checkbox-group");

    const updateValue = (v: any) => {
      emit("update:modelValue", v);
    };

    const cls = computed(() => {
      let clsName = [clsBlockName];
      return clsName;
    });

    const render = () => {
      return <div class={cls.value}></div>;
    };

    return render;
  },
});
