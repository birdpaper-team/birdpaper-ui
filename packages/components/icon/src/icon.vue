<template>
  <svg :class="name">
    <use :xlink:href="getUrl()"></use>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Icon",
  props: {
    /** 图标名称 */
    name: { type: String },
  },
  setup(props) {
    const name = "bp-icon";

    function getUrl() {
      if (!props.name) return;

      const url = new URL(`./remixicon.symbol.svg`, import.meta.url).href;
      return `${url}#${props.name}`;
    }

    return {
      name,
      getUrl,
    };
  },
});
</script>
