import { ref, useSlots, Comment } from "vue";
import { ColumnsItem, TableRowSelection } from "./types";
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
  const getColumnsBySlot = (rowSelection: TableRowSelection): ColumnsItem[] => {
    if (!slots.columns?.()) return [];

    const children = getAllElements(slots.columns?.(), true).filter((item) => {
      if (typeof item.type === "symbol") {
        return false;
      }
      // @ts-ignore
      return item.type !== Comment;
    });
    if (children.length === 0) return [];

    cols = [];
    for (let i = 0; i < children.length; i++) {
      cols.push(children[i]?.props as ColumnsItem);
    }

    if (rowSelection?.type) {
      cols.unshift({
        type: rowSelection.type,
        width: 46,
        align: "center",
      });

      _remainder_col++;
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

      // oxlint-disable-next-line no-unused-expressions
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

// 统一获取滚动条宽度（缓存）
let __bp_cachedScrollbarWidth: number | null = null;
export function getScrollBarWidth(): number {
  if (__bp_cachedScrollbarWidth !== null) return __bp_cachedScrollbarWidth;
  if (typeof window === "undefined") return 0;
  const outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.width = "100px";
  outer.style.position = "absolute";
  outer.style.top = "-9999px";
  outer.style.overflow = "scroll";
  document.body.appendChild(outer);

  const inner = document.createElement("div");
  inner.style.width = "100%";
  outer.appendChild(inner);

  const widthWithScroll = inner.offsetWidth;
  const widthNoScroll = outer.clientWidth;
  outer.parentNode?.removeChild(outer);

  __bp_cachedScrollbarWidth = widthNoScroll - widthWithScroll;
  return __bp_cachedScrollbarWidth || 0;
}

// 规范化列定义（不改变你现有类型导出，新增一个供内部布局使用）
export interface NormalizedColumn {
  key: string;
  width?: number;
  minWidth?: number;
  maxWidth?: number;
  realWidth: number;
  align?: "left" | "center" | "right";
  // ...existing fields...
}

// 根据容器宽度计算列宽（固定列 + 弹性列分配）
export function computeColumnWidths(
  columns: Array<Partial<NormalizedColumn>>,
  tableBodyWidth: number
): NormalizedColumn[] {
  const MIN_COL_WIDTH = 120; // 增加最小列宽，确保内容可读性
  const normalized: NormalizedColumn[] = columns.map((c, i) => {
    const min = Math.max(c.minWidth ?? 0, MIN_COL_WIDTH);
    const w = c.width && c.width > 0 ? c.width : undefined;
    return {
      key: (c as any).key ?? (c as any).prop ?? String(i),
      width: w,
      minWidth: min,
      maxWidth: c.maxWidth,
      realWidth: w ?? min,
      align: c.align as any,
    };
  });

  const fixed = normalized.filter((c) => c.width && c.width > 0);
  const flex = normalized.filter((c) => !c.width);

  const fixedSum = fixed.reduce((s, c) => s + (c.width as number), 0);
  const minFlexSum = flex.reduce((s, c) => s + (c.minWidth as number), 0);
  const totalMinWidth = fixedSum + minFlexSum;

  // 如果内容宽度超过容器宽度，优先保证内容完整显示（启用横向滚动）
  if (totalMinWidth > tableBodyWidth) {
    // 为每列分配至少最小宽度，启用横向滚动
    normalized.forEach((c) => {
      c.realWidth = c.width ?? c.minWidth!;
    });
    return normalized;
  }

  let remain = tableBodyWidth - fixedSum;

  if (remain <= 0) {
    // 宽度不足：但至少保证最小宽度
    normalized.forEach((c) => {
      c.realWidth = c.width ?? c.minWidth!;
    });
    return normalized;
  }

  // 足够宽：弹性列均分剩余空间，尊重 min/max
  const unit = flex.length > 0 ? Math.floor(remain / flex.length) : 0;
  flex.forEach((c) => {
    const target = Math.max(c.minWidth!, unit);
    c.realWidth = typeof c.maxWidth === "number" ? Math.min(target, c.maxWidth) : target;
  });

  // 分配整除误差
  const used = fixedSum + flex.reduce((s, c) => s + c.realWidth, 0);
  let leftover = tableBodyWidth - used;
  let i = 0;
  while (leftover > 0 && flex.length > 0) {
    const col = flex[i % flex.length];
    if (typeof col.maxWidth !== "number" || col.realWidth < col.maxWidth) {
      col.realWidth += 1;
      leftover -= 1;
    } else {
      i++;
      if (i > 10000) break;
      continue;
    }
    i++;
  }

  return normalized;
}

// 计算纵向滚动及 gutter 宽度
export function computeScrollYAndGutter(bodyWrap: HTMLElement | null) {
  if (!bodyWrap) return { scrollY: false, gutter: 0 };
  const scrollY = bodyWrap.scrollHeight > bodyWrap.clientHeight + 1; // 容忍 1px
  return { scrollY, gutter: scrollY ? getScrollBarWidth() : 0 };
}
