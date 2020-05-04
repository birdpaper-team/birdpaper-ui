/*
 * @Author: Sam
 * @Date: 2020-04-21 12:33:36
 * @Last Modified by: Sam
 * @Last Modified time: 2020-04-23 10:37:40
 */
<template>
  <div class="bp-item-bar">
    <div class="bp-item-bar-list">
      <ul>
        <li
          v-for="(item,index) in itemList"
          :key="`bp-item-${index}`"
          @click="handleItemClick(item,index)"
          :class="{'active':activeItemIndex==index}"
        >
          <span>{{item}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "bp-item-bar",
  props: {
    // 栏目项
    itemList: {
      type: Array,
      default: () => {
        return [];
      }
    },
    // 激活的栏目下标
    activeIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      activeItemIndex: 0 // 当前激活的栏目项
    };
  },
  created(){
      this.activeItemIndex = this.activeIndex;
  },
  methods: {
    // 栏目点击触发
    handleItemClick(item, index) {
      this.activeItemIndex = index;
    }
  },
  watch: {
    activeItemIndex() {
      this.$emit("change", {
        item: this.itemList[this.activeItemIndex],
        index: this.activeItemIndex
      });
    },
    activeIndex(){
      this.activeItemIndex = this.activeIndex;
    }
  }
};
</script>

<style lang="less">
@import "./bp-item-bar";
</style>