<template>
  <div :class="cls" @click="handleClick">
    <input type="checkbox" :class="`${name}-inner`" />

    <div :class="[`${name}-slider`, isCheck ? `${name}-check` : '']">
      <span :class="`${name}-slider-dot`">
        <i v-if="loading" class="switch-icon-loading ri-loader-4-line"></i>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { computed } from "vue";

export default defineComponent({
  name: "Switch",
  props: {
    /** 绑定值 Binding value */
    modelValue: { type: Boolean, default: false },
    /** 是否禁用 Disabled or not */
    disabled: { type: Boolean, default: false },
    /** 选中时的值 */
    checkValue: { type: [Boolean, Number, String], default: true },
    /** 未选中时的值 */
    uncheckValue: { type: [Boolean, Number, String], default: false },
    /** 触发改变前的回调，返回 false 则中断 */
    onBeforeOk: { type: Function, default: () => true },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const name = "bp-switch";
    const cls = computed(() => {
      let clsName = [name];
      if (props.disabled) {
        clsName.push(`${name}-disabled`);
      }
      return clsName;
    });

    const isCheck = computed(() => props.modelValue === props.checkValue);

    const loading = ref<boolean>(false);
    const handleClick = async () => {
      if (props.disabled || loading.value) return;

      try {
        loading.value = true;
        const res = await props.onBeforeOk();
        if (!res) return;

        emit("update:modelValue", isCheck.value ? props.uncheckValue : props.checkValue);
      } catch (error) {
        console.log("[ Switch -onBeforeOk error]", error);
      } finally {
        loading.value = false;
      }
    };

    return {
      name,
      cls,
      isCheck,
      loading,
      handleClick,
    };
  },
});
</script>
