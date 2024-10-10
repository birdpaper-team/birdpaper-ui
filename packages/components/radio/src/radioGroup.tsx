import { PropType, Fragment, mergeProps, h, computed } from "vue";
import { DirectionType, RadioType, RadioValue } from "./types";
import { useNamespace } from "@birdpaper-ui/hooks";
import { defineComponent } from "vue";
import { getAllElements } from "@birdpaper-ui/components/utils/dom";
import { ButtonSize } from "@birdpaper-ui/components/button/src/types";
import { get } from "radash";

export default defineComponent({
  name: "RadioGroup",
  props: {
    /**
     * @type RadioValue
     * @description Model value.
     */
    modelValue: {
      type: [String, Number] as PropType<RadioValue>,
    },
    /**
     * @type RadioType
     * @description Radio type.
     * @default "radio"
     */
    type: {
      type: String as PropType<RadioType>,
      default: "radio",
    },
    /**
     * @type ButtonSize
     * @description Radio sizes when the type is button.
     * @default default
     */
    size: {
      type: String as PropType<ButtonSize>,
      default: "default",
    },
    /**
     * @type boolean
     * @description Disabled or not.
     * @default false
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * @type DirectionType
     * @description Direction of radio group.
     * @default "horizontal"
     */
    direction: {
      type: String as PropType<DirectionType>,
      default: "horizontal",
    },
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit, slots }) {
    const { clsBlockName } = useNamespace("radio-group");

    const updateValue = (v: RadioValue) => {
      emit("update:modelValue", v);
    };

    const cls = computed(() => {
      let clsName = [clsBlockName];
      clsName.push(
        props.type === "button"
          ? `${clsBlockName}-button ${clsBlockName}-${props.size}`
          : `${clsBlockName}-${props.direction}`
      );

      return clsName;
    });

    const render = () => {
      const children = getAllElements(slots.default?.(), true).filter((item) => get(item, "type.name") === "Radio");

      return (
        <div class={cls.value}>
          {children.map((child, index) => {
            const radio = Object.assign({}, child);
            radio.props = child.props && mergeProps(child.props, { ...props });

            return (
              <Fragment key={child.key ?? `item-${index}`}>
                {h(radio, {
                  modelValue: props.modelValue,
                  onChange(e: RadioValue) {
                    emit("change", e);
                  },
                  "onUpdate:modelValue"(e: RadioValue) {
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
