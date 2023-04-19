import { defineComponent, PropType, Fragment, Comment } from "vue";
import { getAllElements } from "../../../utils/dom";
import { isString } from "../../../utils/util";
import { SizeType, SpaceType } from "./types";

export default defineComponent({
  name: "Space",
  props: {
    size: { type: [Number, String] as PropType<SizeType>, default: "small" },
    type: { type: String as PropType<SpaceType>, default: "vertical" },
  },
  setup(props, { slots }) {
    const typeMap = { mini: 4, small: 8, normal: 16, large: 24 };
    const size = isString(props.size) ? typeMap[props.size] : props.size;

    const render = () => {
      const children = getAllElements(slots.default?.(), true).filter(item => item.type !== Comment);

      return (
        <div class={["bp-space", `bp-space-${props.type}`]}>
          {children.map((child, index) => {
            return (
              <Fragment key={child.key ?? `item-${index}`}>
                <div
                  class="bp-space-item"
                  style={props.type === "vertical" ? `margin: 0 ${size}px` : `margin: ${size}px 0`}
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
