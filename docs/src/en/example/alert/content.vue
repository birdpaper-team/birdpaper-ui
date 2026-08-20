<template>
  <div class="alert-list">
    <bp-alert status="info" title="Info" content="Detailed description for an info alert." />
    <bp-alert status="success" title="Success" content="Operation completed. Continue to the next step." />
    <bp-alert status="warning" title="Warning" content="Please note this may affect system settings." />
    <bp-alert status="danger" title="Error" content="Operation failed. Check your network and try again." />
  </div>
</template>

<style lang="scss" scoped>
.alert-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
