<template>
  <div class="bp-table">
    <bp-spin :spinning="loading"></bp-spin>
    <div class="bp-table-inner">
      <table>
        <!-- 表头部分 -->
        <thead>
          <tr>
            <th
              v-for="(item, index) in cols"
              :key="`bp-table-thead-${index}`"
              :style="`width:${item.width};min-width:${item.minWidth}`"
            >
              {{ item.title }}
            </th>
          </tr>
        </thead>
        <!-- 数据部分 -->
        <tbody>
          <!-- 空数据缺省展示 -->
          <template v-if="dataSource.length == 0">
            <tr class="bp-table-empty-tr">
              <td :colspan="cols.length">暂无数据</td>
            </tr>
          </template>

          <!-- 数据渲染 -->
          <template v-else>
            <tr
              v-for="(item, index) in dataSource"
              :key="`bp-table-tbody-tr-${index}`"
            >
              <td
                v-for="(v, k) in cols"
                :key="`bp-table-tbody-td-${index}-${k}`"
              >
                <template v-if="!v.scopedSlots">{{ item[v.key] }}</template>
                <!-- 自定义渲染 -->
                <template v-else>
                  <slot
                    :name="v.scopedSlots.customRender"
                    :row="item"
                    :index="index"
                    :data="item[v.key]"
                  ></slot>
                </template>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "bp-table",
  props: {
    // 表格头
    cols: {
      type: Array,
      default: () => {
        return [];
      },
    },
    // 表格数据
    dataSource: {
      type: Array,
      default: () => {
        return [];
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
