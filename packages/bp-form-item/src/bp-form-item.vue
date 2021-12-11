<template>
  <bp-row
    class="bp-form-item"
    type="flex"
    justify="start"
    gutter="5"
    align="top"
  >
    <bp-col class="bp-form-item-label" v-if="col !== 0" :span="labelCol">
      <label
        :class="['bp-form-item-label-text', { 'require-label': isRequire }]"
      >
        {{ label }}
      </label>
    </bp-col>

    <bp-col :span="innerCol" class="bp-form-item-inner">
      <slot></slot>
    </bp-col>
  </bp-row>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
export default {
  name: "bp-form-item",
  props: {
    name: { type: String, default: "" }, // TODO
    label: { type: String, default: "" },
    isRequire: { type: Boolean, default: false },
    col: { type: [String, Object, Number], default: 0 },
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
