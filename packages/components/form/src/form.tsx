import { PropType, computed, defineComponent } from "vue";
import { FormLayout } from "./types";

export default defineComponent({
  name: "Form",
  props: {
    model: { type: Object, default: () => {} },
    layout: { type: String as PropType<FormLayout>, default: "inline" },
  },
  setup(props, { emit, slots }) {
    const name = "bp-form";

    const cls = computed(() => {
      let clsName = [name];
      clsName.push(`${name}-${props.layout}`);

      return clsName;
    });

    const render = () => {
      return <div class={cls.value}>{slots.default?.()}</div>;
    };

    return render;
  },
});
