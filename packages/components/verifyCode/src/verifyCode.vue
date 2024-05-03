<template>
  <div :class="inpClass">
    <template v-for="v in length">
      <input
        v-model.trim="globalValue[v - 1]"
        type="text"
        :ref="setItemRef"
        :class="['bp-verifycode-inner']"
        :spellcheck="false"
        :disabled="disabled"
        :readonly="readonly"
        :maxlength="1"
        @focus="onFocus"
        @keydown="onKeydown"
        @keydown.space.prevent=""
        @input="onInput($event, v - 1)" />
    </template>
  </div>
</template>

<script lang="ts">
import { getChildrenIndex } from "../../../utils/dom";
import { InputSize } from "../../input/src/types";
import { PropType, computed, defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "VerifyCode",
  props: {
    /** 绑定值 Binding value */
    modelValue: { type: String, default: "" },
    /** 输入框尺寸 Size of the input */
    size: { type: String as PropType<InputSize>, default: "normal" },
    /** 验证码长度 Verify code length */
    length: { type: Number, default: 6 },
    /** 是否禁用 Disabled or not */
    disabled: { type: Boolean, default: false },
    /** 是否只读状态 Readonly or not */
    readonly: { type: Boolean, default: false },
    /** 是否警示状态 Danger or not */
    isDanger: { type: Boolean, default: false },
  },
  emits: ["update:modelValue", "input"],
  setup(props, { emit }) {
    const name = "bp-verifycode";

    let inpRefs = [];
    const setItemRef = (el: Element) => {
      inpRefs.push(el);
    };

    const globalValue = ref<string[]>([]);
    const onInput = (e: Event, index: number) => {
      const targetValue = (e.target as HTMLInputElement).value.replace(/\s+/g, "");
      !!targetValue && index + 1 < props.length && inpRefs[index + 1].focus();

      emit("input", globalValue.value.join("").substring(0, props.length));
    };

    const onFocus = () => {
      const len = globalValue.value.length;
      return inpRefs[len >= props.length ? len - 1 : len].focus();
    };

    const onKeydown = (e: KeyboardEvent) => {
      const index = getChildrenIndex(e.target);
      const val = globalValue.value[index];
      const isLastEl = index === props.length - 1;

      switch (e.key) {
        case "Backspace":
          globalValue.value.splice(isLastEl && val? index : index - 1, 1);
          onFocus();
          break;

        default:
          break;
      }
    };

    const inpClass = computed(() => {
      const status = getStatus();
      return [name, `${name}-size-${props.size}`, `${name}-status-${status}`];
    });
    function getStatus() {
      return (props.disabled && "disabled") || (props.readonly && "readonly") || (props.isDanger && "danger") || "normal";
    }

    watch(
      () => props.modelValue,
      () => {
        globalValue.value = props.modelValue.split("") || [];
      },
      { immediate: true }
    );

    return {
      name,
      setItemRef,
      inpClass,
      globalValue,
      onFocus,
      onInput,
      onKeydown,
    };
  },
});
</script>
