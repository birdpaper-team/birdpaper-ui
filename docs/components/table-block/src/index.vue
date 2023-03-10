<!--
 * @ Author: Sam
 * @ Create Time: 2023-02-22 20:18:08
 * @ Modified by: Sam
 * @ Modified time: 2023-03-10 17:24:35
 * @ Description: API表格组件
 -->
<template>
  <div class="table-block">
    <bp-table :cols="header[type]" :data-source="list">
      <!-- 名称 -->
      <template #name="{ row }">
        <div class="name-area">
          <span class="name-area-inner">{{ row.name || "-" }}</span>
        </div>
      </template>
      <!-- 说明 -->
      <template #remark="{ row }">
        <div class="remark-area">
          <span class="remark-area-inner">{{ row.remark || "-" }}</span>
        </div>
      </template>
      <!-- 默认值 -->
      <template #default="{ row }">
        <div class="default-area">
          <span class="default-area-inner">{{ row.default || "-" }}</span>
        </div>
      </template>
      <!-- 类型 -->
      <template #type="{ row }">
        <div class="type-area">
          <span class="type-area-inner">{{ row.type || "-" }}</span>
          <span
            v-if="row.type === 'Enum'"
            :class="['ri-error-warning-fill', { active: row.showTip }]"
            @click="row.showTip = !row.showTip"
          ></span>
          <Transition>
            <div v-if="row.showTip" class="optional-area">
              <span>{{ row.optional.join(" | ") }}</span>
            </div>
          </Transition>
        </div>
      </template>
    </bp-table>
  </div>
</template>

<script setup lang="ts" name="table-block">
import { onMounted, ref } from "vue";
import { EventTableItem, header, MethodTableItem, PropTableItem, SlotTableItem } from "./tableBlock";

const props = defineProps({
  type: { type: String, default: "props" },
  src: { type: String, default: "" },
});
const list = ref<PropTableItem[] | EventTableItem[] | MethodTableItem[] | SlotTableItem[]>([]);

const init = async () => {
  if (!props.src) return;

  const dataGlob = import.meta.glob(`../../../src/example/**/*.ts`);
  const res = await import(/* @vite-ignore */ dataGlob[`../../../src/${props.src}.ts`].name);
  list.value = res.default;
};

onMounted(() => init());
</script>
