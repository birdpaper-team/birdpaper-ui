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
      <bp-button :disabled="confirmDisabled" size="mini" type="primary" status="primary">确认</bp-button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, Ref } from "vue";
import { generateArray } from "../../../../utils/util";
// @ts-ignore
import { RecycleScroller } from "vue-virtual-scroller";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
import dayjs from "dayjs";

export default defineComponent({
  name: "TimeTable",
  components: { RecycleScroller },
  setup(props) {
    const name = "bp-time-table";
    const ctx = ref<any>();

    const hourList = generateArray(24);
    const minuteList = generateArray(60);
    const secondList = generateArray(60);

    const globalValue = ref<string[]>(["", "", ""]);
    const confirmDisabled = computed(() => globalValue.value.filter(item => item === "").length > 0);

    const typeRefs = ref([]) as Ref<any[]>;
    const handleClick = (index: number, item: string) => {
      typeRefs.value[index].scrollToItem(item);
      globalValue.value[index] = item;
      setDefault();
    };

    const setDefault = () => {
      for (let i = 0; i < globalValue.value.length; i++) {
        const element = globalValue.value[i];
        if (!element) {
          globalValue.value[i] = "00";
        }
      }
    };

    const setNow = () => {
      const now = dayjs().format("HH:mm:ss");
      globalValue.value = now.split(":");

      for (let i = 0; i < globalValue.value.length; i++) {
        const element = globalValue.value[i];
        typeRefs.value[i].scrollToItem(element);
      }
    };

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
    };
  },
});
</script>
