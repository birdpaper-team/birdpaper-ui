/*
 * @Author: Sam
 * @Date: 2020-04-21 12:33:36
 * @Last Modified by: Sam
 * @Last Modified time: 2021-01-20 14:34:03
 */
<template>
  <div class="bp-item-bar">
    <div class="bp-item-bar-list">
      <ul>
        <li
          v-for="(item, index) in itemList"
          :key="`bp-item-${index}`"
          @click="handleItemClick(item, index)"
          :class="{ active: activeItemIndex == index }"
        >
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs, watch } from "vue";
export default {
  name: "bp-item-bar",
  props: {
    // 栏目项
    itemList: {
      type: Array,
      default: () => {
        return [];
      },
    },
    // 激活的栏目下标
    activeIndex: {
      type: Number,
      default: 0,
    },
  },
  emits: {
    change: {},
  },
  setup(props, { emit }) {
    const activeItemIndex = ref(0); // 当前激活的栏目项

    activeItemIndex.value = props.activeIndex;

    // 栏目点击触发
    const handleItemClick = (item, index) => {
      activeItemIndex.value = index;
    };

    watch(activeItemIndex, () => {
      emit("change", {
        item: props.itemList[activeItemIndex.value],
        index: activeItemIndex.value,
      });
    });

    return {
      activeItemIndex,
      handleItemClick,
    };
  },
  // watch: {
  //   activeIndex() {
  //     this.activeItemIndex = this.activeIndex;
  //   },
  // },
};
</script>