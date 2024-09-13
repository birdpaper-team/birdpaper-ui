import { ref, useSlots } from "vue";
import { ColumnsItem } from "./types";
import { getAllElements } from "@birdpaper-ui/components/utils/dom";

export const useTableCore = () => {
  const slots = useSlots();

  const bpTable = ref<HTMLElement>();

  /** 表头列表 */
  const columns = ref<ColumnsItem[]>([]);

  /** 表格所占的实际宽度 px */
  const table_width = ref();

  /** 在没有设定宽度时，可用于撑开剩余宽度的列数 */
  let _remainder_col = 0;

  /** 固定宽度（包含自定义的宽和最小宽的总和） */
  let _fixed_width = 0;

  /** 各列最小宽度数组 */
  let _min_width_list: number[] = [];

  /** 表格各列宽度数组 */
  let _col_width_list: number[] = [];

  /** 单列最小宽度 */
  const _min_column_width = 80;

  let cols: ColumnsItem[] = [];

  /**
   * @description Get columns from slot.
   * @returns ColumnsItem[]
   */
  const getColumnsBySlot = (): ColumnsItem[] => {
    if (!slots.columns?.()) return [];

    const children = getAllElements(slots.columns?.(), true).filter((item) => {
      if (typeof item.type === "symbol") {
        return false;
      }
      return item.type !== Comment;
    });
    console.log("children: ", children);
    if (children.length === 0) return [];

    cols = [];
    for (let i = 0; i < children.length; i++) {
      cols.push(children[i]?.props as ColumnsItem);
    }

    return cols;
  };

  /**
   * @description Reset data.
   */
  const resetColumns = () => {
    _fixed_width = 0;
    _remainder_col = cols.length;
    _min_width_list = [];
  };

  /**
   * @description Init table columns width.
   * @returns columns
   */
  const initColumnsWidth = () => {
    for (let i = 0; i < cols.length; i++) {
      const { width } = cols[i];
      const minWidth = cols[i]["minWidth"] || cols[i]["min-width"];

      // 如果含有自定义的宽和最小宽，则需要单独处理这些列，使其不参与剩余宽度自适应当中
      if (width) {
        _fixed_width += Number(width);
        _remainder_col--;
      }

      minWidth && _min_width_list.push(Number(minWidth));
    }

    table_width.value = bpTable.value && bpTable.value.offsetWidth;
    _col_width_list = getWidthList() || [];

    columns.value = [];
    for (let i = 0; i < cols.length; i++) {
      columns.value.push({ ...cols[i], width: _col_width_list[i] });
    }
    return columns.value;
  };

  /**
   * @description 获取各列宽度，并组成一个数组
   * @returns number[]
   */
  function getWidthList() {
    let width_list: number[] = [];

    let adapt_width: number = getAdaptWidth();

    /**
     * 当表格中含有设置最小宽度的列时，需要挨个比较自适应宽是否小于最小宽度
     * 如果小于，则重新设置各个值并重新计算自适应宽度
     */
    if (_min_width_list.length) {
      _min_width_list.map((item, index) => {
        if (adapt_width > item) {
          _fixed_width += item;
          _remainder_col--;
          _min_width_list.splice(index, 1);
          adapt_width = getAdaptWidth();
        }
      });
    }

    for (let i = 0; i < cols.length; i++) {
      const { width, minWidth } = cols[i];

      if (width) {
        width_list.push(width);
        continue;
      }

      // 是否设置成最小宽度：当含有最小宽度属性并且最小宽度大于计算得出的最大列宽
      const hasMinWidth = minWidth && minWidth > adapt_width;
      if (hasMinWidth) {
        width_list.push(minWidth);
        continue;
      }

      // 如果没有定义宽度和最小宽，则设置成自适应宽度或者最小预设宽度
      width_list.push(adapt_width < _min_column_width ? _min_column_width : adapt_width);
    }
    return width_list;
  }

  /**
   * @description 根据表格实际宽度、已固定的列宽、以及剩余自适应列数，计算得出剩余的自适应列宽
   * @returns number
   */
  function getAdaptWidth(): number {
    let width = (table_width.value - _fixed_width) / _remainder_col;
    return Number(Number(width).toFixed(2));
  }

  return {
    bpTable,
    columns,
    getColumnsBySlot,
    resetColumns,
    initColumnsWidth,
  };
};
