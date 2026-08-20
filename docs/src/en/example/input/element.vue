<template>
  <bp-space>
    <bp-input placeholder="Enter phone number">
      <template #prefix> +86 </template>
    </bp-input>
    <bp-input clearable placeholder="Enter content">
      <template #suffix>
        <IconSearch2Line />
      </template>
    </bp-input>
  </bp-space>
</template>
