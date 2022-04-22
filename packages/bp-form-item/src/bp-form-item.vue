<template>
  <bp-row class="bp-form-item" type="flex" justify="start" gutter="5" align="top">
    <bp-col
      :class="['bp-form-item-label', !inline ? 'label-text-left' : 'label-text-right']"
      v-if="col && !inline"
      :span="!inline ? 24 : labelCol"
    >
      <label :class="['bp-form-item-label-text', !inline ? 'inline-label-text' : 'unline-label-text', { 'require-label': isRequire }]">
        {{ label }}
      </label>
      <div class="bp-form-item-inner">
        <slot></slot>
      </div>
    </bp-col>

    <bp-col v-if="inline" :span="innerCol" class="bp-form-item-inner">
      <slot></slot>
    </bp-col>
  </bp-row>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
export default {
  name: "bp-form-item",
  props: {
    name: { type: String, default: "" },
    label: { type: String, default: "" },
    isRequire: { type: Boolean, default: false },
    col: { type: [String, Object, Number], default: 0 },
    inline: { type: Boolean, default: true },
  },
  setup(props) {
    const col = reactive({
      labelCol: "",
      innerCol: "",
    });

    if (typeof props.col === "Object") {
      col.labelCol = Number(props.col.span);
      col.innerCol = 24 - props.col.span;
    } else {
      col.labelCol = Number(props.col);
      col.innerCol = 24 - col.labelCol;
    }

    return {
      ...toRefs(col),
    };
  },
};
</script>
