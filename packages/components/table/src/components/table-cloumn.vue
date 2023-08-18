<template>
  <td>
    <span v-if="!slots?.cell">{{ record[dataIndex] }}</span>
    <slot name="cell" :record="record" :rowIndex="rowIndex"/>
  </td>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TableColumn",
  props: {
    title: { type: String },
    record: { type: Object, default: () => {} },
    dataIndex: { type: Number },
    rowIndex: { type: Number },
  },
  setup(props, { slots }) {
    return {
      slots
    }
  },
});
</script>
