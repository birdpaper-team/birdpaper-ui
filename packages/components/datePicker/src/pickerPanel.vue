<template>
  <div :class="name">
    <div :class="`${name}-wrapper`">
      <date-table></date-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import dateTable from "./components/date-table.vue";

const name = "bp-date-picker-panel";
</script>
