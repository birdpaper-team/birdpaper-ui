import { PropType, Fragment, Comment, mergeProps, ref, h, computed } from "vue";
import { DirectionType, RadioGroupValue, RadioType } from "./type";
import { defineComponent } from "vue";
import { getAllElements } from "../../../utils/dom";

export default defineComponent({
  name: "RadioGroup",
  props: {
    /** 单选框绑定值 */
    modelValue: { type: [String, Number] as PropType<RadioGroupValue> },
    /** 是否禁用 */
    disabled: { type: Boolean, default: false },
    /** 单选框组类型 */
    type: { type: String as PropType<RadioType>, default: "radio" },
    /** 排列方向 */
    direction: { type: String as PropType<DirectionType>, default: "horizontal" },
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit, slots }) {
    const name = "bp-radio-group";

    const updateValue = (v: RadioGroupValue) => {
      emit("update:modelValue", v);
    };

    const cls = computed(() => {
      let clsName = [name];
      clsName.push(`${name}-${props.direction}`);
      props.type === "button" && clsName.push(`${name}-button`);

      return clsName;
    });

    const render = () => {
      const children = getAllElements(slots.default?.(), true).filter(item => item.type !== Comment);

      return (
        <div class={cls.value}>
          {children.map((child, index) => {
            const radio = Object.assign({}, child);
            radio.props = mergeProps(child.props, { ...props });

            return (
              <Fragment key={child.key ?? `item-${index}`}>
                {h(radio, {
                  modelValue: props.modelValue,
                  onChange(e: RadioGroupValue) {
                    emit("change", e);
                  },
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
