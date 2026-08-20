<template>
  <div class="position-demo">
    <bp-popconfirm content="Confirm?" position="top">
      <bp-button>Top</bp-button>
    </bp-popconfirm>
    <bp-popconfirm content="Confirm?" position="bottom">
      <bp-button>Bottom</bp-button>
    </bp-popconfirm>
    <bp-popconfirm content="Confirm?" position="top-left">
      <bp-button>Top Left</bp-button>
    </bp-popconfirm>
    <bp-popconfirm content="Confirm?" position="top-right">
      <bp-button>Top Right</bp-button>
    </bp-popconfirm>
    <bp-popconfirm content="Confirm?" position="bottom-left">
      <bp-button>Bottom Left</bp-button>
    </bp-popconfirm>
    <bp-popconfirm content="Confirm?" position="bottom-right">
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
