<template>
  <bp-space>
    <bp-button-group>
      <bp-button> <i class="ri-arrow-left-s-line"></i> Prev</bp-button>
      <bp-button>Next <i class="ri-arrow-right-s-line"></i></bp-button>
    </bp-button-group>

    <bp-button-group type="primary" status="primary">
      <bp-button>More</bp-button>
      <bp-button :icon="IconArrowDownSLine"></bp-button>
    </bp-button-group>

    <bp-button-group type="primary" block status="danger">
      <bp-button :icon="IconHeart3Fill"></bp-button>
      <bp-button :icon="IconStarFill"></bp-button>
      <bp-button :icon="IconThumbUpFill"></bp-button>
    </bp-button-group>
  </bp-space>
</template>

<script setup lang="ts">
import { IconArrowDownSLine, IconHeart3Fill, IconStarFill, IconThumbUpFill } from "birdpaper-icon";
</script>
