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

      try {
        // @ts-ignore
        const url = import.meta.glob("./remixicon.symbol.svg", { eager: true })["./remixicon.symbol.svg"].default;
        return `${url}#${props.name}`;
      } catch (error) {
        return "";
      }
    }

    return {
      clsName,
      getUrl,
    };
  },
});
</script>
