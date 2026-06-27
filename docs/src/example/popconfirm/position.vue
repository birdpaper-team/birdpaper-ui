<template>
  <div class="position-demo">
    <bp-popconfirm content="确认执行？" position="top">
      <bp-button>Top</bp-button>
    </bp-popconfirm>
    <bp-popconfirm content="确认执行？" position="bottom">
      <bp-button>Bottom</bp-button>
    </bp-popconfirm>
    <bp-popconfirm content="确认执行？" position="top-left">
      <bp-button>Top Left</bp-button>
    </bp-popconfirm>
    <bp-popconfirm content="确认执行？" position="top-right">
      <bp-button>Top Right</bp-button>
    </bp-popconfirm>
    <bp-popconfirm content="确认执行？" position="bottom-left">
      <bp-button>Bottom Left</bp-button>
    </bp-popconfirm>
    <bp-popconfirm content="确认执行？" position="bottom-right">
      <bp-button>Bottom Right</bp-button>
    </bp-popconfirm>
  </div>
</template>

<style lang="scss" scoped>
.position-demo {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
</style>
