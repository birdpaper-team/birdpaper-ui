import { PropType, Fragment, mergeProps, h, computed } from "vue";
import { useNamespace } from "@birdpaper-ui/hooks";
import { defineComponent } from "vue";
import { getAllElements } from "@birdpaper-ui/components/utils/dom";
import { get } from "radash";
import { CheckboxValue, DirectionType } from "./types";

export default defineComponent({
  name: "CheckboxGroup",
  props: {
    /**
     * @type CheckboxValue[]
     * @description Model value.
     * @default: []
     */
    modelValue: {
      type: Array as PropType<CheckboxValue[]>,
      default: () => [],
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
    /**
     * @type number
     * @description Max number of checkbox.
     * @default 0
     */
    max: {
      type: Number,
      default: 0,
    },
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit, slots }) {
    const { clsBlockName } = useNamespace("checkbox-group");

    // const updateValue = (v: CheckboxValue) => {
    //   // emit("update:modelValue", v);
    // };

    const cls = computed(() => {
      let clsName = [clsBlockName, `${clsBlockName}-${props.direction}`];
      return clsName;
    });

    const render = () => {
      const children = getAllElements(slots.default?.(), true).filter((item) => get(item, "type.name") === "Checkbox");

      return (
        <div class={cls.value}>
          {children.map((child, index) => {
            const checkbox = Object.assign({}, child);
            checkbox.props = child.props && mergeProps(child.props, { ...props });

            return (
              <Fragment key={child.key ?? `item-${index}`}>
                {h(checkbox, {
                  modelValue: props.modelValue,
                  onChange(e: CheckboxValue) {
                    emit("change", e);
                  },
                  // "onUpdate:modelValue"(e: CheckboxValue) {
                  //   updateValue(e);
                  // },
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
