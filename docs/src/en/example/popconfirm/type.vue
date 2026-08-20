<template>
  <bp-space :size="16">
    <bp-popconfirm content="Confirm this action?" type="info">
      <bp-button status="primary">Info</bp-button>
    </bp-popconfirm>
    <bp-popconfirm content="Confirm this action?" type="success">
      <bp-button status="success">Success</bp-button>
    </bp-popconfirm>
    <bp-popconfirm content="Confirm this action?" type="warning">
      <bp-button status="warning">Warning</bp-button>
    </bp-popconfirm>
    <bp-popconfirm content="Confirm this action?" type="error">
      <bp-button status="danger">Error</bp-button>
    </bp-popconfirm>
  </bp-space>
</template>
