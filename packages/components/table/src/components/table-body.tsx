import { Fragment, defineComponent, Comment, mergeProps, h, VNodeProps } from "vue";
import { TableColumnProps } from "../props";
import { useNamespace } from "@birdpaper-ui/hooks";
import { getAllElements } from "@birdpaper-ui/components/utils/dom";
import { get } from "radash";
import ColGroup from "./col-group.vue";

export default defineComponent({
  name: "TableBody",
  props: {
    data: { type: Array, default: () => [] },
    rowKey: { type: String },
    cols: { type: Array, default: () => [] },
    height: { type: String },
  },
  components: { ColGroup },
  setup(props, { slots }) {
    const children = getAllElements(slots.default?.(), true).filter((item) => get(item, "type") !== Comment);
    const { clsBlockName } = useNamespace("table-body-tbody");

    const bodyRender = () => {
      return (
        <tbody class={clsBlockName} style={{ height: props.height }}>
          {props.data.map((record: any, rowIndex: number) => {
            return (
              <tr key={rowIndex}>
                <col-group columns={props.cols}></col-group>

                {children.map((child, childIndex) => {
                  const props = child?.props as TableColumnProps;
                  const column = Object.assign({}, child);
                  column.props = mergeProps(child.props as VNodeProps, { record, rowIndex });

                  return (
                    <Fragment key={`table-column-${rowIndex}-${props?.dataIndex || childIndex}`}>{column}</Fragment>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      );
    };

    return bodyRender;
  },
});
