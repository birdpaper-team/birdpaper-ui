<template>
  <bp-space type="horizontal">
    <bp-row :gutter="10">
      <bp-col span="12">
        <bp-alert type="info">这是一条提示信息</bp-alert>
      </bp-col>
      <bp-col span="12">
        <bp-alert type="success">这是一条成功提示</bp-alert>
      </bp-col>
    </bp-row>
    <bp-row :gutter="10">
      <bp-col span="12">
        <bp-alert type="warning">这是一条警告提示</bp-alert>
      </bp-col>
      <bp-col span="12">
        <bp-alert type="error">这是一条错误提示</bp-alert>
      </bp-col>
    </bp-row>
  </bp-space>
</template>
