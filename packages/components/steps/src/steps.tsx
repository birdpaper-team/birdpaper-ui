import { getAllElements } from "@birdpaper-ui/components/utils/dom";
import { useNamespace } from "@birdpaper-ui/hooks/src/use-namespace";
import { defineComponent, Fragment, h, Comment, mergeProps, PropType, VNode } from "vue";
import { get } from "radash";

export default defineComponent({
  name: "Steps",
  props: {
    /**
     * @type {number}
     * @default 0
     */
    modelValue: { type: Number, default: 0 },
    /**
     * @type StepsType
     * @description The type of direction.
     * @default "horizontal"
     */
    type: { type: String as PropType<"vertical" | "horizontal">, default: "horizontal" },
    /**
     * @type {boolean}
     * @description Whether to hide the line between steps.
     * @default false
     */
    hideLine: { type: Boolean, default: false },
  },
  setup(props, { slots }) {
    const { clsBlockName } = useNamespace("steps");
    const { clsBlockName: itemClsBlockName } = useNamespace("step");

    const render = () => {
      const children = getAllElements(slots.default?.(), false).filter((item) => get(item, "type") !== Comment);

      return (
        <div class={[clsBlockName, { [`${clsBlockName}-${props.type}`]: props.type }]}>
          {children.map((child: VNode, index: number) => {
            const step = Object.assign({}, child);

            const isFinished = props.modelValue > index;
            const isActive = props.modelValue === index;
            const status = isFinished ? "finish" : isActive ? "process" : "wait";

            const childProps = { index, status, ...props };
            step.props = child.props ? mergeProps(child.props, childProps) : childProps;

            return h(Fragment, { key: child.key ?? `item-${index}` }, [
              <div class={[`${clsBlockName}-item`, `${itemClsBlockName}-${status}`, { "hide-line": props.hideLine }]}>
                {h(step, {})}
              </div>
            ]);
          })}
        </div>
      );
    };

    return render;
  },
});
