<template>
  <div :class="name">
    <div :class="`${name}-wrapper`">
      <time-table></time-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import timeTable from "./components/time-table.vue";

const name = "bp-time-picker-panel";
</script>
