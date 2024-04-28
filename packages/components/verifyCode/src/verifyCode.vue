<template>
  <div :class="inpClass">
    <template v-for="v in length">
      <input :ref="setItemRef" :class="['bp-verifycode-inner']" type="text" :spellcheck="false" :disabled="disabled" :readonly="readonly" />
    </template>
  </div>
</template>

<script lang="ts">
import { InputSize } from "../../input/src/types";
import { PropType, computed, defineComponent } from "vue";

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

    const inpClass = computed(() => {
      const status = getStatus();
      return [name, `${name}-size-${props.size}`, `${name}-status-${status}`];
    });
    function getStatus() {
      return (props.disabled && "disabled") || (props.readonly && "readonly") || (props.isDanger && "danger") || "normal";
    }

    return {
      name,
      setItemRef,
      inpClass,
    };
  },
});
</script>
