/**
 * @ Author: Sam
 * @ Create Time: 2023-03-09 07:25:31
 * @ Modified by: Sam
 * @ Modified time: 2023-03-09 18:33:31
 * @ Description:
 */

import { defineComponent, Fragment, useSlots } from "vue";
import { getAllElements } from "../../../utils/dom";

export default defineComponent({
  name: "space",
  props: {
    size: { type: Number, default: 4 },
  },
  setup(props, { slots }) {
    return () => {
      const children = getAllElements(useSlots().default?.(), true).filter(item => item.type !== Comment);

      return (
        <div class="bp-space">
          {children.map((child, index) => {
            return <div style={`margin: 0 ${props.size}px`}>{child}</div>;
          })}
        </div>
      );
    };
  },
});
