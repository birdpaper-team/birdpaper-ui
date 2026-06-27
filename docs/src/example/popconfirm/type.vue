<template>
  <bp-space :size="16">
    <bp-popconfirm content="确认执行此操作？" type="info">
      <bp-button status="primary">Info</bp-button>
    </bp-popconfirm>
    <bp-popconfirm content="确认执行此操作？" type="success">
      <bp-button status="success">Success</bp-button>
    </bp-popconfirm>
    <bp-popconfirm content="确认执行此操作？" type="warning">
      <bp-button status="warning">Warning</bp-button>
    </bp-popconfirm>
    <bp-popconfirm content="确认执行此操作？" type="error">
      <bp-button status="danger">Error</bp-button>
    </bp-popconfirm>
  </bp-space>
</template>
