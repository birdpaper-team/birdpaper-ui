import { ButtonShape, ButtonSize, ButtonStatus } from "components/button/src/types";
import { PropType, defineComponent, Fragment, Comment, mergeProps, computed } from "vue";
import { getAllElements } from "../../../utils/dom";
import { ButtonGroupType } from "./types";

export default defineComponent({
  name: "ButtonGroup",
  props: {
    /** 按钮类型 Type of the button */
    type: { type: String as PropType<ButtonGroupType>, default: "normal" },
    /** 按钮尺寸 Size of the button */
    size: { type: String as PropType<ButtonSize>, default: "normal" },
    /** 按钮形状 Shape of the button */
    shape: { type: String as PropType<ButtonShape>, default: "square" },
    /** 按钮状态 Status of the button */
    status: { type: String as PropType<ButtonStatus>, default: "normal" },
    /** 是否撑满父级 Block or not */
    block: { type: Boolean, default: false },
  },
  setup(props, { slots }) {
    const name = "bp-button-group";

    const cls = computed(() => {
      let clsName = [name];
      !["plain", "dashed"].includes(props.type) && clsName.push(`${name}-type-${props.type}-status-${props.status}`);
      props.block && clsName.push(`${name}-block`)

      return clsName;
    });

    const render = () => {
      const children = getAllElements(slots.default?.(), true).filter(item => item.type !== Comment);

      return (
        <div class={cls.value}>
          {children.map((child, index) => {
            const btn = Object.assign({}, child);
            btn.props = mergeProps(child.props, { ...props });
            return <Fragment key={child.key ?? `item-${index}`}>{btn}</Fragment>;
          })}
        </div>
      );
    };

    return render;
  },
});
