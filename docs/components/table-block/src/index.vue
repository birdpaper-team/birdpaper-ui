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
        <div class="type-area" v-clickOutside="() => onClickoutside(row)">
          <template v-if="typeof row.type === 'object'">
            <span class="type-area-inner" v-for="v in row.type">
              {{ v }}
            </span>
          </template>
          <span class="type-area-inner" v-else>{{ row.type || "-" }}</span>

          <!-- 枚举值展示 -->
          <span
            v-if="row.type === 'Enum' || row.type.includes('Enum')"
            :class="['ri-error-warning-fill', { active: row.showTip }]"
            @click="handleRowTipShow(row)"
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
import { PropType, ref, watch } from "vue";
import { EventTableItem, header, MethodTableItem, PropTableItem, SlotTableItem } from "./tableBlock";
import { vClickOutside } from "../../directives/clickOutside";

const props = defineProps({
  type: { type: String, default: "props" },
  src: { type: String, default: "" },
  data: { type: Array as PropType<PropTableItem[] | EventTableItem[] | MethodTableItem[] | SlotTableItem[]>, default: () => [] },
});
const list = ref<PropTableItem[] | EventTableItem[] | MethodTableItem[] | SlotTableItem[]>([]);

const handleRowTipShow = (row: any) => {
  for (let i = 0; i < list.value.length; i++) {
    list.value[i].name !== row.name && (list.value[i].showTip = false);
  }
  row.showTip = !row.showTip;
};

const onClickoutside = (row: any) => {
  row.showTip = false;
};

watch(
  () => props.data,
  () => {
    list.value = props.data;
  },
  {
    immediate: true,
    deep: true,
  }
);
</script>
