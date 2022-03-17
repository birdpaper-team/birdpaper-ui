/**
 * @Author: Sam
 * @Date: 2022-03-14 10:27:08
 * @LastModifiedBy:   Sam
 * @LastModifiedTime: 2022-03-14 10:27:08
 */
import { ref, onMounted, nextTick, onBeforeUnmount } from "vue";
import { off, on, throttle } from "../utils/util";

export const useTable = (props, emit) => {
  const bpTable = ref(null);

  const _min_column_width = 80;

  /**
   * 表格所占的实际宽度 px
   */
  const _table_width = ref("");

  const columns = ref([]);

  /**
   * 初始化表头列表
   */
  const _initTableColumns = () => {
    const el = bpTable.value;
    const { length: col_len } = props.cols;

    columns.value = [];
    _table_width.value = el && el.offsetWidth - col_len;

    let len = col_len, t_width = _table_width.value, _last_col_width;
    for (let i = 0; i < col_len; i++) {
      const item = props.cols[i];

      if (item.width) {
        t_width -= Number(item.width);
        len--;
        _last_col_width = getDefaultColWidth(t_width, len);
      }

      const { label, key, scope = null, width = _last_col_width } = item;
      columns.value.push({ label, key, scope, width });
    }
  }

  /**
   * 获取列自适应宽度，且列宽不能小于 80
   * @param {Number} last_width 剩余可自动撑开的宽度
   * @param {Number} col_len  用于撑开剩余宽度的列数
   * @returns Number
   */
  function getDefaultColWidth(last_width, col_len = 0) {
    if (col_len === 0) return;

    let width = Number((last_width / col_len).toFixed());
    return width < 80 ? 80 : width;
  }

  onMounted(() => {
    nextTick(() => {
      _initTableColumns();

      // 监听宽度变化并重新初始化表格列布局
      on(window, 'resize', throttle(() => _initTableColumns(), 200));
    });
  });

  onBeforeUnmount(() => off(window, 'resize', () => _initTableColumns()));

  return {
    bpTable,
    _table_width,
    columns
  }
}