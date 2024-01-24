<template>
  <bp-modal v-model="modalConfig.show" :title="modalConfig.icon" width="560px">
    <div class="icon-modal-body">
      <div class="icon-area">
        <component :is="allIcons[`Icon${modalConfig.icon}`]" size="40" :fill="modalConfig.color"></component>
      </div>
      <div class="icon-info">
        <div class="icon-info-title">
          <p>{{ modalConfig.icon }}</p>
          <component :is="allIcons[`IconFileCopyLine`]" size="18" @click="handleCopy(modalConfig.icon)"></component>
        </div>
        <div class="icon-info-component">
          <bp-input :modelValue="componentTag" readonly style="width: 100%">
            <template #perfix>
              <component :is="allIcons[`IconCodeView`]"></component>
            </template>
            <template #suffix>
              <component :is="allIcons[`IconFileCopyLine`]" @click="handleCopy(componentTag)"></component>
            </template>
          </bp-input>
        </div>
      </div>
    </div>
    <template #footer>
      <input v-model="modalConfig.color" type="color" />
    </template>
  </bp-modal>
</template>

<script setup lang="ts">
import * as allIcons from "birdpaper-icon";
import { Message } from "birdpaper-ui";
import { computed, ref } from "vue";
import * as useClipboard from "vue-clipboard3/dist/esm/index";

class ModalConfig {
  show: boolean = false;
  icon: string = "";
  color: string = "#262626";
}
const modalConfig = ref<ModalConfig>(new ModalConfig());

const componentTag = computed<string>(() => {
  return `<Icon${modalConfig.value.icon} ${modalConfig.value.color ? 'fill="' + modalConfig.value.color + '"' : ""}/>`;
});

/** 复制到剪贴板 */
const { toClipboard } = useClipboard.default();
const handleCopy = async (str: string) => {
  try {
    await toClipboard(str);
    Message.success(`已复制到剪贴板: ${str}`);
  } catch (err) {
    Message.error((err as Error).message);
  }
};

const open = (icon: string) => {
  modalConfig.value = new ModalConfig();
  modalConfig.value.icon = icon;
  modalConfig.value.show = true;
};

defineExpose({
  open,
});
</script>
