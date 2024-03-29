<template>
  <bp-space type="horizontal">
    <bp-textarea :style="{ width: '380px' }" readonly placeholder="Readonly"></bp-textarea>
    <bp-textarea :style="{ width: '380px' }" disabled placeholder="Diasbled"></bp-textarea>
    <bp-textarea :style="{ width: '380px' }" is-danger placeholder="Danger"></bp-textarea>
  </bp-space>
</template>