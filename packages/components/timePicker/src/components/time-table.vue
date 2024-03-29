<template>
  <div :class="name">
    <div :class="`${name}-body`">
      <template v-for="(items, index) in [hourList, minuteList, secondList]">
        <RecycleScroller
          listClass="time-col-scroller-list"
          :ref="el => (typeRefs[index] = el)"
          :class="`${name}-time-col`"
          :items="items"
          :item-size="28"
          v-slot="{ item }"
        >
          <div :class="[`${name}-col-cell`, { active: item === globalValue[index] }]" @click="handleClick(index, item)">
            <span :class="`${name}-col-cell-inner`">{{ item }}</span>
          </div>
        </RecycleScroller>
      </template>
    </div>
    <div :class="`${name}-footer`">
      <bp-button size="mini" @click="setNow">现在</bp-button>
      <bp-button :disabled="confirmDisabled" size="mini" type="primary" status="primary" @click="handleSelect">
        确认
      </bp-button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, nextTick, ref, Ref, watch } from "vue";
import { generateArray } from "../../../../utils/util";
// @ts-ignore
import { RecycleScroller } from "vue-virtual-scroller";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
import dayjs from "dayjs";
import { timeInjectionKey, TimePickerContext } from "../types";

export default defineComponent({
  name: "TimeTable",
  components: { RecycleScroller },
  props: {
    visible: { type: Boolean, default: false },
  },
  setup(props) {
    const name = "bp-time-table";
    const ctx = ref<TimePickerContext>();

    const defaultValue = "00";
    const hourList = generateArray(24);
    const minuteList = generateArray(60);
    const secondList = generateArray(60);

    ctx.value = inject(timeInjectionKey);

    const globalValue = ref<string[]>(["", "", ""]);
    /** 确认按钮禁用判断 */
    const confirmDisabled = computed(() => globalValue.value.filter(item => item === "").length > 0);

    const typeRefs = ref([]) as Ref<any>;
    const handleClick = (index: number, item: string) => {
      globalValue.value[index] = item;
      scrollTo(index, item);
      setDefault();
    };

    const setDefault = () => {
      for (let i = 0; i < globalValue.value.length; i++) {
        const element = globalValue.value[i];

        if (!element) {
          globalValue.value[i] = defaultValue;
          scrollTo(i);
        }
      }
    };

    /** 设置当前时间 */
    const setNow = () => {
      const now = dayjs().format("HH:mm:ss");
      globalValue.value = now.split(":");

      for (let i = 0; i < globalValue.value.length; i++) {
        const item = globalValue.value[i];
        scrollTo(i, item);
      }

      handleSelect();
    };

    /**
     * 将选中值滚动到顶部
     * @param i 类型下标
     * @param item 值
     */
    const scrollTo = (i: number, item: string = defaultValue) => typeRefs.value[i].scrollToItem(item);

    const handleSelect = () => {
      ctx.value.onSelect(globalValue.value.join(":"));
    };

    watch(
      () => props.visible,
      () => {
        if (props.visible) {
          if (!ctx.value.modelValue) return;

          globalValue.value = ["", "", ""];
          const arr = ctx.value.modelValue.split(":");
          for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            globalValue.value.push(Number(element).toString().padStart(2, "0"));
          }

          nextTick(() => {
            globalValue.value.map((item: string, index: number) => {
              scrollTo(index, item);
            });
          });
        }
      }
    );

    return {
      ctx,
      name,
      typeRefs,
      hourList,
      minuteList,
      secondList,
      globalValue,
      confirmDisabled,
      setNow,
      handleClick,
      handleSelect,
    };
  },
});
</script>
