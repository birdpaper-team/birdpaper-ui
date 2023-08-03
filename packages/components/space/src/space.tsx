import { defineComponent, PropType, Fragment, Comment } from "vue";
import { getAllElements } from "../../../utils/dom";
import { isString } from "../../../utils/util";
import { SizeType, SpaceType } from "./types";

export default defineComponent({
  name: "Space",
  props: {
    size: { type: [Number, String] as PropType<SizeType>, default: "normal" },
    type: { type: String as PropType<SpaceType>, default: "horizontal" },
    justify: { type: String, default: "flex-start" },
  },
  setup(props, { slots }) {
    const typeMap = { mini: 4, small: 8, normal: 10, large: 24 };
    const size = isString(props.size) ? typeMap[props.size] : props.size;

    const render = () => {
      const children = getAllElements(slots.default?.(), true).filter(item => item.type !== Comment);

      return (
        <div class={["bp-space", `bp-space-${props.type}`]} style={`justify-content:${props.justify}`}>
          {children.map((child, index) => {
            return (
              <Fragment key={child.key ?? `item-${index}`}>
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
