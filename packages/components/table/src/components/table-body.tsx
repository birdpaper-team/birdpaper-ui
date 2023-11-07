import { getAllElements } from "../../../../utils/dom";
import { Fragment, defineComponent, Comment, mergeProps, PropType, ref, watch } from "vue";
import { SelectedValue, SelectionConfig } from "../types";
import TableSelect from "./table-select.vue";

export default defineComponent({
  name: "TableBody",
  props: {
    /** 表格数据 */
    data: { type: Array, default: () => [] },
    /** 已选数据 key */
    modelValue: { type: Array as PropType<SelectedValue>, default: () => [] },
    /** 选择器配置 */
    selection: { type: Object as PropType<SelectionConfig> },
    /** 行 Key 字段名称 */
    rowKey: { type: String },
  },
  components: { TableSelect },
  emits: ["update:modelValue", "change"],
  setup(props, { slots, emit }) {
    const children = getAllElements(slots.default?.(), true).filter(item => item.type !== Comment);

    const val = ref<SelectedValue>(props.modelValue || []);

    watch(val, () => {
      emit("update:modelValue", val.value);
    });

    watch(
      () => props.modelValue,
      () => {
        val.value = props.modelValue;
      }
    );

    const onChange = record => {
      emit("change", record);
    };

    const bodyRender = () => {
      return (
        <tbody class="bp-table-body-tbody">
          {props.data.map((record: any, rowIndex: number) => {
            return (
              <tr>
                {["radio", "checkbox"].includes(props.selection?.type) ? (
                  <td class="bp-table-td">
                    <table-select
                      v-model={val.value}
                      record={record}
                      type={props.selection?.type}
                      value={record[props.rowKey]}
                      onChange={onChange}
                    ></table-select>
                  </td>
                ) : null}
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
