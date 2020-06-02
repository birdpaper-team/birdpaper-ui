/*
 * @Author: Sam
 * @Date: 2020-05-25 13:40:52
 * @Last Modified by: Sam
 * @Last Modified time: 2020-05-26 14:33:43
 */
<template>
  <div class="bp-table">
    <div class="bp-table-inner">
      <table>
        <!-- 表头部分 -->
        <thead>
          <tr>
            <th v-for="(item,index) in cols" :key="`bp-table-thead${index}`">{{item.title}}</th>
          </tr>
        </thead>
        <!-- 数据部分 -->
        <tbody>
          <!-- 空数据缺省展示 -->
          <template v-if="data.length == 0">
            <tr class="bp-table-empty-tr">
              <td :colspan="data.length">暂无数据</td>
            </tr>
          </template>
          <!-- 数据渲染 -->
          <template v-else>
            <tr v-for="(item,index) in data" :key="`bp-table-tbody-tr-${index}`">
              <td v-for="(v,k) in cols" :key="`bp-table-tbody-tr-${index}-${k}`">{{item[v.key]}}</td>
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
    cols: {
      type: Array,
      default: () => {
        return [];
      }
    },
    data: {
      type: Array,
      default: () => {
        return [];
      }
    }
  }
};
</script>

<style lang="less">
@import "./bp-table.less";
</style>