import { ref, watch } from "vue";
import { SelectedValue } from "./types";

export const useTableSelect = (props: any, emit: any, tableHeaderRef: any) => {
  /** 选择的数据 key */
  const selectedData = ref<SelectedValue>([]);

  /** 点击行选择器时触发 */
  const onSelectChange = (record: unknown) => {
    emit("select", selectedData.value, record[props.rowKey], record);
  };

  /** 全选 */
  const onSelectAll = (isSelectAll: boolean) => {
    emit("select-all", isSelectAll);

    if (!isSelectAll) {
      selectedData.value = [];
      return;
    }

    selectedData.value = [];
    for (let i = 0; i < props.data.length; i++) {
      const element = props.data[i];
      selectedData.value.push(element[props.rowKey]);
    }
  };

  watch(selectedData, () => {
    tableHeaderRef.value &&
      (tableHeaderRef.value.isSelectAll = props.data.length !== 0 && selectedData.value?.length === props.data.length);

    emit("selection-change", selectedData.value);
    emit("update:selectedKey", selectedData.value);
  });

  return {
    onSelectChange,
    onSelectAll,
    selectedData,
  };
};
