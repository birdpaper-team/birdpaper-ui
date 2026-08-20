<template>
  <bp-space :size="16">
    <bp-tooltip content="Trigger on hover" trigger="hover">
      <bp-button>Hover</bp-button>
    </bp-tooltip>
    <bp-tooltip content="Click to trigger" trigger="click">
      <bp-button>Click</bp-button>
    </bp-tooltip>
  </bp-space>
</template>
