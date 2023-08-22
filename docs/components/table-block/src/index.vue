<template>
  <div class="table-block">
    <bp-table :data="list">
      <template #columns>
        <bp-table-column title="名称" data-index="name" width="140">
          <template #cell="{ record }">
            <span class="name-area-inner">{{ record.name || "-" }}</span>
          </template>
        </bp-table-column>
        <bp-table-column title="说明" data-index="remark">
          <template #cell="{ record }">
            <span class="remark-area-inner">{{ record.remark || "-" }}</span>
          </template>
        </bp-table-column>
        <bp-table-column title="类型" data-index="type" width="240">
          <template #cell="{ record }">
            <div class="type-area" v-clickOutside="() => onClickoutside(record)">
              <template v-if="typeof record.type === 'object'">
                <span class="type-area-inner" v-for="v in record.type">
                  {{ v }}
                </span>
              </template>
              <span class="type-area-inner" v-else>{{ record.type || "-" }}</span>

              <bp-tooltip
                v-if="record.type && (record.type === 'Enum' || record.type.indexOf('Enum') !== -1)"
                trigger="click"
                :content="record.optional && record.optional.join(' | ')"
              >
                <span
                  :class="['ri-error-warning-fill', { active: record.showTip }]"
                  @click="handleRowTipShow(record)"
                ></span>
              </bp-tooltip>
            </div>
          </template>
        </bp-table-column>
        <bp-table-column title="默认值" data-index="default">
          <template #cell="{ record }">
            <span class="default-area-inner">{{ record.default || "-" }}</span>
          </template>
        </bp-table-column>
      </template>
    </bp-table>
  </div>
</template>

<script setup lang="ts" name="table-block">
import { PropType, ref, watch } from "vue";
import { EventTableItem, MethodTableItem, PropTableItem, SlotTableItem } from "./tableBlock";
import { vClickOutside } from "../../directives/clickOutside";

const props = defineProps({
  src: { type: String, default: "" },
  data: {
    type: Array as PropType<PropTableItem[] | EventTableItem[] | MethodTableItem[] | SlotTableItem[]>,
    default: () => [],
  },
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
