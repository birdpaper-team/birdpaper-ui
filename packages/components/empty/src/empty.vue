<template>
  <div :class="cls">
    <div :class="`${cls}-icon`">
      <component :is="icon" size="28"></component>
    </div>
    <div :class="`${cls}-inner`">
      {{ description }}
    </div>
  </div>
</template>

<script lang="ts">
import { IconInbox2Line } from "birdpaper-icon";
import { PropType, computed, defineComponent } from "vue";

export default defineComponent({
  name: "Empty",
  props: {
    /** 图标 */
    icon: { type: Object as PropType<Comment>, default: IconInbox2Line },
    /** 描述文字 */
    description: { type: String, default: "暂无数据" },
  },
  components: { IconInbox2Line },
  emits: ["click"],
  setup: function () {
    const name = "bp-empty";

    const cls = computed(() => {
      let clsName: string[];
      clsName = [name];

      return clsName;
    });

    return {
      name,
      cls,
    };
  },
});
</script>
