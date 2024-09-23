import { defineComponent, Fragment, h, PropType } from "vue";
import { useNamespace } from "@birdpaper-ui/hooks";
import { SizeType, SpaceType } from "./types";
import { getAllElements } from "@birdpaper-ui/components/utils/dom";

export default defineComponent({
  name: "Space",
  props: {
    /**
     * @type SizeType|number
     * @description The size of space.
     * @default: "normal"
     */
    size: { type: [Number, String] as PropType<SizeType>, default: "normal" },
    /**
     * @type SpaceType
     * @description The type of layout.
     * @default "horizontal"
     */
    type: { type: String as PropType<SpaceType>, default: "horizontal" },
    /**
     * @type string
     * @description Horizontal alignment.
     * @default: "flex-start"
     */
    justify: { type: String, default: "flex-start" },
    /**
     * @type string
     * @description Vertical alignment.
     * @default: "center"
     */
    align: { type: String, default: "flex-start" },
  },
  setup(props, { slots }) {
    const { clsBlockName } = useNamespace("space");
    const typeMap = { mini: 4, small: 8, normal: 10, large: 24 };
    const size = typeof props.size === "string" ? typeMap[props.size] : props.size;

    const render = () => {
      const children = getAllElements(slots.default?.(), true).filter((item) => item.type !== Comment);

      return (
        <div
          class={[clsBlockName, `${clsBlockName}-${props.type}`]}
          style={`justify-content:${props.justify};align-items:${props.align}`}
        >
          {children.map((child, index) => {
            const hasSplit = slots.split && index > 0;

            return (
              <Fragment key={child.key ?? `item-${index}`}>
                {hasSplit && (
                  <div
                    class={`${clsBlockName}-item`}
                    style={props.type === "horizontal" ? `margin: 0 ${size}px` : `margin: ${size}px 0`}
                  >
                    {slots.split?.()}
                  </div>
                )}
                <div
                  class={`${clsBlockName}-item`}
                  style={props.type === "horizontal" ? `margin: 0 ${size}px` : `margin: ${size}px 0`}
                >
                  {child}
                </div>
              </Fragment>
            );
          })}
        </div>
      );
    };

    return render;
  },
});
