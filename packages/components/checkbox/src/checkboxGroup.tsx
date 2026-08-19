import { PropType, Fragment, cloneVNode, h, computed, VNode, ref } from "vue";
import { useNamespace } from "@birdpaper-ui/hooks";
import { defineComponent } from "vue";
import { getAllElements } from "@birdpaper-ui/components/utils/dom";
import { get } from "radash";
import { CheckboxDirectionType, CheckboxValueForArray } from "./types";

export default defineComponent({
  name: "CheckboxGroup",
  props: {
    /**
     * @type CheckboxValueForArray[]
     * @description Model value.
     * @default: []
     */
    modelValue: {
      type: Array as PropType<CheckboxValueForArray[]>,
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
     * @type CheckboxDirectionType
     * @description Direction of radio group.
     * @default "horizontal"
     */
    direction: {
      type: String as PropType<CheckboxDirectionType>,
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
    const _vals = ref<CheckboxValueForArray[]>([]);
    const { clsBlockName } = useNamespace("checkbox-group");

    const cls = computed(() => {
      let clsName = [clsBlockName.value, `${clsBlockName.value}-${props.direction}`];
      return clsName;
    });

    const render = () => {
      const children = getAllElements(slots.default?.(), true).filter((item) => get(item, "type.name") === "Checkbox");

      return (
        <div class={cls.value}>
          {children.map((child: VNode, index: number) => {
            const checkbox = cloneVNode(child, {
              // Merge disabled: group or child disabled=true wins
              disabled: !!(props.disabled || child.props?.disabled),
              max: props.max,
              modelValue: props.modelValue,
              onChange(val: CheckboxValueForArray[]) {
                _vals.value = val;
                emit("update:modelValue", _vals.value);
                emit("change", _vals.value);
              },
            });

            return h(Fragment, { key: child.key ?? `item-${index}` }, [checkbox]);
          })}
        </div>
      );
    };

    return render;
  },
});
