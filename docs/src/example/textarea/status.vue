<template>
  <bp-space type="horizontal">
    <bp-textarea :style="{ width: '380px' }" readonly placeholder="只读状态"></bp-textarea>
    <bp-textarea :style="{ width: '380px' }" disabled placeholder="禁用状态"></bp-textarea>
    <bp-textarea :style="{ width: '380px' }" is-danger placeholder="警示状态"></bp-textarea>
  </bp-space>
</template>