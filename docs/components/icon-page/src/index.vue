<template>
  <div class="icon-page">
    <div class="icon-page-inner">
      <template v-for="v in iconList">
        <div class="icon-item">
          <i :class="v"></i>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts" name="icon-page">
import iconList from "./icon";
</script>