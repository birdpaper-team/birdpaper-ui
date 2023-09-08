import { PropType, Fragment, Comment, mergeProps, ref, h } from "vue";
import { RadioGroupValue } from "./type";
import { defineComponent } from "vue";
import { getAllElements } from "../../../utils/dom";

export default defineComponent({
  name: "RadioGroup",
  props: {
    /** 单选框绑定值 */
    modelValue: { type: [String, Number] as PropType<RadioGroupValue> },
    /** 是否禁用 */
    disabled: { type: Boolean, default: false },
  },
  emits: ["update:modelValue"],
  setup(props, { emit, slots }) {
    const name = "bp-radio-group";

    const updateValue = (v: RadioGroupValue) => {
      emit("update:modelValue", v);
    };

    const val = ref(0);

    const render = () => {
      const children = getAllElements(slots.default?.(), true).filter(item => item.type !== Comment);

      return (
        <div class={name}>
          {children.map((child, index) => {
            const radio = Object.assign({}, child);
            radio.props = mergeProps(child.props, { ...props });

            return (
              <Fragment key={child.key ?? `item-${index}`}>
                {h(radio, {
                  modelValue: props.modelValue,
                  "onUpdate:modelValue"(e: RadioGroupValue) {
                    updateValue(e);
                  },
                })}
              </Fragment>
            );
          })}
        </div>
      );
    };

    return render;
  },
});
