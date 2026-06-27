<template>
  <bp-space :size="16">
    <bp-tooltip content="鼠标悬停触发" trigger="hover">
      <bp-button>Hover</bp-button>
    </bp-tooltip>
    <bp-tooltip content="点击触发" trigger="click">
      <bp-button>Click</bp-button>
    </bp-tooltip>
  </bp-space>
</template>
