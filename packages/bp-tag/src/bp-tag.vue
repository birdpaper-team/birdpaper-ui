/*
 * @Author: Sam
 * @Date: 2021-03-29 14:25:48
 * @Last Modified by: Sam
 * @Last Modified time: 2021-04-19 14:50:24
 */
<template>
  <div :class="tagClazz">
    <p class="bp-tag-inner"><slot></slot></p>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "bp-tag",
  props: {
    type: { type: String, default: "default" },
    theme: { type: String, default: "light" },
  },
  setup(props) {
    const tagClazz = computed(() => {
      let name = ["bp-tag"];
      name.push(`tag-${props.theme}-${props.type}`);
      return name;
    });

    return {
      tagClazz,
    };
  },
};
</script>