/*
 * @Author: Sam
 * @Date: 2020-04-02 14:27:59
 * @Last Modified by: Sam
 * @Last Modified time: 2020-04-03 10:08:13
 */
<template>
  <transition name="bp-fade-in">
    <div class="bp-mask" v-if="show"></div>
  </transition>
</template>

<script>
export default {
  name: "bp-mask",
  props: {
    // 遮罩显示/隐藏
    show: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    // 建议挂载到 Body
    this.$nextTick(() => {
      const body = document.querySelector("body");
      body.append ? body.append(this.$el) : body.appendChild(this.$el);
    });
  }
};
</script>

<style lang="less">
@import "./bp-mask";
</style>