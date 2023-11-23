<template>
  <svg :class="clsName">
    <use :xlink:href="getUrl()"></use>
  </svg>
</template>

<script lang="ts">
import { computed } from "vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Icon",
  props: {
    /** 图标名称 */
    name: { type: String },
  },
  setup(props) {
    const name = "bp-icon";
    const clsName = computed(() => {
      let cls = [name, props.name];
      return cls;
    });

    function getUrl() {
      if (!props.name) return;

      const url = new URL(`./remixicon.symbol.svg`, import.meta.url).href;
      return `${url}#${props.name}`;
    }

    return {
      clsName,
      getUrl,
    };
  },
});
</script>
