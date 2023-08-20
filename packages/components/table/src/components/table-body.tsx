import { getAllElements } from "../../../../utils/dom";
import { Fragment, defineComponent, h, mergeProps } from "vue";

export default defineComponent({
  name: "TableBody",
  props: {
    data: { type: Array, default: () => [] },
  },
  setup(props, { slots }) {
    const children = getAllElements(slots.default?.(), true).filter(item => item.type !== Comment);

    const bodyRender = () => {
      return (
        <tbody class="bp-table-body-tbody">
          {props.data.map((record: any, rowIndex: number) => {
            return (
              <tr>
                {children.map((child, childIndex) => {
                  const { dataIndex = childIndex } = child?.props;
                  const column = Object.assign({}, child);
                  column.props = mergeProps(child.props, { record, rowIndex });

                  return <Fragment key={`bp-table-column-${rowIndex}-${dataIndex}`}>{column}</Fragment>;
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
