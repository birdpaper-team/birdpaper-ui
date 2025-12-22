<template>
  <div class="trigger-demo">
    <h2>Trigger 组件示例</h2>
    
    <div class="demo-section">
      <h3>点击触发</h3>
      <Trigger v-model="visible1" trigger="click">
        <button>点击我</button>
        <template #content>
          <div class="popup-content">
            这是点击触发的内容
          </div>
        </template>
      </Trigger>
    </div>
    
    <div class="demo-section">
      <h3>悬停触发</h3>
      <Trigger v-model="visible2" trigger="hover">
        <button>悬停在我上面</button>
        <template #content>
          <div class="popup-content">
            这是悬停触发的内容
          </div>
        </template>
      </Trigger>
    </div>
    
    <div class="demo-section">
      <h3>自定义容器</h3>
      <div class="custom-container" ref="customContainer">
        <h4>自定义容器区域</h4>
        <Trigger v-model="visible3" trigger="click" :getPopupContainer="getCustomContainer">
          <button>在自定义容器中打开</button>
          <template #content>
            <div class="popup-content">
              这个弹出层会渲染在自定义容器中
            </div>
          </template>
        </Trigger>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Trigger from '@birdpaper-ui/components/trigger';

const visible1 = ref(false);
const visible2 = ref(false);
const visible3 = ref(false);
const customContainer = ref<HTMLElement>();

const getCustomContainer = () => {
  return customContainer.value || document.body;
};
</script>

<style scoped>
.trigger-demo {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.demo-section {
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 4px;
}

.custom-container {
  position: relative;
  height: 200px;
  padding: 20px;
  border: 2px dashed #999;
  border-radius: 4px;
  overflow: hidden;
}

.popup-content {
  padding: 12px 16px;
  background: white;
  border: 1px solid #eee;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  max-width: 200px;
}

button {
  padding: 8px 16px;
  background: #1890ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #40a9ff;
}
</style>