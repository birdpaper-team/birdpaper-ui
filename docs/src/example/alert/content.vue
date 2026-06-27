<template>
  <div class="alert-list">
    <bp-alert status="info" title="信息提示" content="这是一条信息提示的详细描述内容。" />
    <bp-alert status="success" title="成功提示" content="操作已成功完成，请继续下一步操作。" />
    <bp-alert status="warning" title="警告提示" content="请注意，此操作可能会影响系统配置。" />
    <bp-alert status="danger" title="错误提示" content="操作失败，请检查网络连接后重试。" />
  </div>
</template>

<style lang="scss" scoped>
.alert-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
