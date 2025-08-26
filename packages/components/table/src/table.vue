<template>
  <div :class="cls">
    <bp-spin :spinning="props.loading" :spin-icon="props.spinIcon" :description="props.description">
      <div :class="`${clsBlockName}-body-area`">
        <!-- 头部（不滚动） -->
        <div :class="`${clsBlockName}-header-wrap`" ref="headerWrapRef">
          <table :class="`${clsBlockName}-header bp-table-fixed`">
            <colGroup :columns="layoutColumns" :gutter-width="gutterWidth" />
            <tableHeader ref="tableHeaderRef" :list="columns" :gutter-width="gutterWidth" @select-all="onSelectAll" />
          </table>
        </div>

        <!-- 内容（滚动） -->
        <div :class="`${clsBlockName}-body-wrap`" ref="bodyWrapRef" @scroll="onBodyScroll">
          <table :class="`${clsBlockName}-body bp-table-fixed`">
            <colGroup :columns="layoutColumns" :gutter-width="gutterWidth" />

            <tbody :class="`${clsBlockName}-body-tbody`" v-if="isEmpty">
              <tr>
                <td :colspan="layoutColumns.length + (gutterWidth > 0 ? 1 : 0)">
                  <slot name="empty"></slot>
                  <div :class="`${clsBlockName}-body-tbody-empty`" v-if="!slots.empty?.({})">
                    <bp-empty :content="props.emptyText"></bp-empty>
                  </div>
                </td>
              </tr>
            </tbody>

            <tableBody v-else :data="props.data" :row-key="props.rowKey" :cols="layoutColumns" :height="props.height">
              <tableColumn align="center" v-if="!!props.rowSelection">
                <template #cell="{ record }">
                  <bp-checkbox
                    v-if="props.rowSelection?.type === 'checkbox'"
                    v-model="selectedKeys as CheckboxValueForArray[]"
                    :value="record[props.rowKey]"
                    @change="onCkbChange(record[props.rowKey], record)"
                  />
                  <bp-radio v-else v-model="selectedKey" :value="record[props.rowKey]" />
                </template>
              </tableColumn>
              <slot name="columns" />
            </tableBody>
          </table>
        </div>
      </div>
    </bp-spin>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { TableProps, tableProps } from "./props";
import BpEmpty from "@birdpaper-ui/components/empty/index";
import BpCheckbox, { CheckboxValueForArray } from "@birdpaper-ui/components/checkbox/index";
import BpRadio, { RadioValue } from "@birdpaper-ui/components/radio/index";
import BpSpin from "@birdpaper-ui/components/spin/index";
import tableHeader from "./components/table-header.vue";
import tableColumn from "./components/table-column.vue";
import tableBody from "./components/table-body.jsx";
import { useTableCore } from "./core";
import { computed, nextTick, onMounted, useSlots, ref, watch, watchPostEffect } from "vue";
import colGroup from "./components/col-group.vue";
import { computeColumnWidths, computeScrollYAndGutter, type NormalizedColumn } from "./core";

defineOptions({ name: "Table" });
const { clsBlockName } = useNamespace("table");

const selectedKey = defineModel<RadioValue>("selectedKey", { default: "" });
const selectedKeys = defineModel<CheckboxValueForArray[]>("selectedKeys", { default: [] });
const props: TableProps = defineProps(tableProps);
const emits = defineEmits<{
  (e: "select-all", val: boolean): void;
  (e: "select", val: CheckboxValueForArray[], rowKey: RadioValue, record: any): void;
  (e: "selection-change", val: CheckboxValueForArray[]): void;
}>();
const slots = useSlots();

// 从核心逻辑中获取列
const { columns, getColumnsBySlot, resetColumns, initColumnsWidth } = useTableCore();

// DOM 引用
const headerWrapRef = ref<HTMLElement | null>(null);
const bodyWrapRef = ref<HTMLElement | null>(null);

// 计算列宽（header/body 共享）
const layoutColumns = ref<NormalizedColumn[]>([]);
const gutterWidth = ref(0);

function isFiniteNumber(v: any): v is number {
  return typeof v === "number" && isFinite(v);
}

const buildRawColumns = () => {
  // 从 useTableCore 的 columns 中提取宽度配置：key/prop/width/minWidth/maxWidth/align
  return (columns.value || []).map((c: any, i: number) => ({
    key: c.key ?? c.prop ?? String(i),
    prop: c.prop,
    width: isFiniteNumber(c.width) ? Number(c.width) : undefined,
    minWidth: isFiniteNumber(c.minWidth) ? Number(c.minWidth) : undefined,
    maxWidth: isFiniteNumber(c.maxWidth) ? Number(c.maxWidth) : undefined,
    align: c.align,
  }));
};

const recalcLayout = () => {
  const bodyEl = bodyWrapRef.value;
  const wrapWidth = bodyEl ? bodyEl.clientWidth : 0;
  const raws = buildRawColumns();
  layoutColumns.value = computeColumnWidths(raws as any[], wrapWidth);
  const { gutter } = computeScrollYAndGutter(bodyEl);
  gutterWidth.value = gutter;
};

const isEmpty = computed<boolean>(() => props.data.length === 0);

const onSelectAll = (val: boolean) => {
  selectedKeys.value = [];
  if (val) {
    selectedKeys.value = props.data.map((item: any) => item[props.rowKey]);
  }
  emits("select-all", val);
};

const onCkbChange = (rowKey: string | number, record: any) => {
  emits("select", selectedKeys.value, rowKey, record);
  emits("selection-change", selectedKeys.value);
};

const init = () => {
  getColumnsBySlot(props.rowSelection);
  resetColumns();
  initColumnsWidth();
  nextTick(recalcLayout);
};

onMounted(() => {
  nextTick(() => init());

  // 容器尺寸变化重算布局
  if (typeof window !== "undefined" && "ResizeObserver" in window) {
    const ro = new ResizeObserver(() => nextTick(recalcLayout));
    bodyWrapRef.value && ro.observe(bodyWrapRef.value);
  }

  // 数据渲染后，修正滚动条出现带来的头体错位
  watchPostEffect(() => nextTick(recalcLayout));
});

// 同步横向滚动
const onBodyScroll = () => {
  const headerWrap = headerWrapRef.value;
  const bodyWrap = bodyWrapRef.value;
  if (!headerWrap || !bodyWrap) return;
  headerWrap.scrollLeft = bodyWrap.scrollLeft;
};

// 数据或列变化时重算
watch(
  () => props.data,
  () => nextTick(recalcLayout),
  { deep: true }
);
watch(columns, () => nextTick(recalcLayout), { deep: true });

const cls = computed(() => [
  clsBlockName,
  props.border && `${clsBlockName}-border`,
  props.stripe && `${clsBlockName}-stripe`,
]);
</script>

<style scoped>
.bp-table-fixed {
  table-layout: fixed;
  width: 100%;
  /* border-collapse: separate; */
}

:deep(.bp-table__thead th.bp-table__gutter) {
  padding: 0;
  border: none;
}
</style>
