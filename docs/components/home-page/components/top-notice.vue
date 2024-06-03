<template>
  <div :class="name">
    <div :class="`${name}-inner`">
      <p>
        该项目作者正在<span>深圳</span>寻求一份更好的<span>web前端开发</span>工作机会，你可以访问<a href="https://github.com/liluanhui" target="_blank">他的主页</a>or<a href="https://birdpaper.feishu.cn/share/base/form/shrcnqP5qEs9pzdfD4rbMkAZZAe" target="_blank">获取他的简历</a>进行了解。
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const name = "top-notice";
</script>
