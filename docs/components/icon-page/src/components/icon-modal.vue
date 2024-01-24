<template>
  <bp-modal v-model="modalShow" :title="iconName" width="600px">
    <div class="icon-modal-body">
      <div class="icon-area">
        <component :is="allIcons[`Icon${iconName}`]" size="40" :fill="color"></component>
      </div>
      <div class="icon-info">
        <div class="icon-info-title">
          <p>{{ iconName }}</p>
          <component :is="allIcons[`IconFileCopyLine`]" size="18" @click="handleCopy(iconName)"></component>
        </div>
        <div class="icon-info-component">
          <bp-input :modelValue="componentTag" readonly style="width: 280px">
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
      <input v-model="color" type="color" />
    </template>
  </bp-modal>
</template>

<script setup lang="ts">
import * as allIcons from "birdpaper-icon";
import { Message } from "birdpaper-ui";
import { computed, ref } from "vue";
import * as useClipboard from "vue-clipboard3/dist/esm/index";

const modalShow = ref<boolean>(false);
const iconName = ref<string>("");
const color = ref<string>("#262626");
const componentTag = computed<string>(() => {
  return `<Icon${iconName.value} ${color ? 'fill="' + color.value + '"' : ""}/>`;
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
  iconName.value = icon;
  modalShow.value = true;
};

defineExpose({
  open,
});
</script>
