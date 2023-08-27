import { defineComponent, PropType, Fragment, Comment } from "vue";
import { getAllElements } from "../../../utils/dom";
import { isString } from "../../../utils/util";
import { SizeType, SpaceType } from "./types";

export default defineComponent({
  name: "Space",
  props: {
    /** 间距大小 */
    size: { type: [Number, String] as PropType<SizeType>, default: "normal" },
    /** 布局类型 */
    type: { type: String as PropType<SpaceType>, default: "horizontal" },
    /** 水平对齐方式 */
    justify: { type: String, default: "flex-start" },
    /** 垂直对齐方式 */
    align: { type: String, default: "flex-start" },
  },
  setup(props, { slots }) {
    const typeMap = { mini: 4, small: 8, normal: 10, large: 24 };
    const size = isString(props.size) ? typeMap[props.size] : props.size;

    const render = () => {
      const children = getAllElements(slots.default?.(), true).filter(item => item.type !== Comment);

      return (
        <div
          class={["bp-space", `bp-space-${props.type}`]}
          style={`justify-content:${props.justify};align-items:${props.align}`}
        >
          {children.map((child, index) => {
            const hasSplit = slots.split && index > 0;

            return (
              <Fragment key={child.key ?? `item-${index}`}>
                {hasSplit && (
                  <div
                    class="bp-space-item"
                    style={props.type === "horizontal" ? `margin: 0 ${size}px` : `margin: ${size}px 0`}
                  >
                    {slots.split?.()}
                  </div>
                )}
                <div
                  class="bp-space-item"
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
