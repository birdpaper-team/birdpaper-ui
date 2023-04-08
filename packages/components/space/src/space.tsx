import { defineComponent, PropType, Fragment, Comment } from "vue";
import { getAllElements } from "../../../utils/dom";
import { isString } from "../../../utils/util";
import { SizeType } from "./types";

export default defineComponent({
  name: "space",
  props: {
    size: { type: [Number, String] as PropType<SizeType>, default: "small" },
  },
  setup(props, { slots }) {
    const typeMap = { mini: 4, small: 8, normal: 16, large: 24 };
    const children = getAllElements(slots.default?.(), true).filter(item => item.type !== Comment);
    const size = isString(props.size) ? typeMap[props.size] : props.size;

    const render = () => {
      return (
        <div class="bp-space">
          {children.map((child, index) => {
            return (
              <Fragment key={child.key ?? `item-${index}`}>
                <div class="bp-space-item" style={`margin: 0 ${size}px`}>
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
