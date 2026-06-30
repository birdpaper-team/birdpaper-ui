import { Fragment, defineComponent, Comment, mergeProps, h, VNodeProps, VNode } from "vue";
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
        <tbody class={clsBlockName.value} style={{ height: props.height }}>
          {props.data.map((record: any, rowIndex: number) => {
            return (
              <tr key={rowIndex}>
                {children.map((child: VNode, childIndex: number) => {
                  const columnProps = child?.props as TableColumnProps;
                  const colMeta = props.cols[childIndex] as any;
                  const column = Object.assign({}, child);
                  column.props = mergeProps(child.props as VNodeProps, {
                    record,
                    rowIndex,
                    fixed: colMeta?.fixed,
                    fixedOffset: colMeta?.fixedOffset,
                  });

                  return h(Fragment, { key: `table-column-${rowIndex}-${columnProps?.dataIndex || childIndex}` }, [column]);
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
