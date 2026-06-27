<template>
  <div class="input-area">
    <bp-space size="mini" class="input-area-value">
      <bp-select v-model="valueType" size="mini" style="width: 60px">
        <bp-option v-for="v in valueTypeList" :value="v">{{ v.toLocaleUpperCase() }}</bp-option>
      </bp-select>
      <bp-input v-model="hexValue" size="mini" style="width: 108px" v-if="valueType === 'hex'" @blur="updateByHex">
        <template #prefix>
          <span>#</span>
        </template>
      </bp-input>
      <template v-else>
        <div class="flex">
          <bp-input v-model="rgbR" @blur="updateByRgb" style="width: 44px" size="mini"></bp-input>
          <bp-input v-model="rgbG" @blur="updateByRgb" style="width: 44px" size="mini"></bp-input>
          <bp-input v-model="rgbB" @blur="updateByRgb" style="width: 44px" size="mini"></bp-input>
        </div>
      </template>
      <bp-input-number
        unit="%"
        size="mini"
        style="width: 52px"
        v-model="alphaValue"
        :max="100"
        :min="1"
        @step="onAlphaInput"
      ></bp-input-number>
    </bp-space>
  </div>
</template>

<script setup lang="ts">
import { PropType, computed, ref, watch } from "vue";
import BpSpace from "@birdpaper-ui/components/space/index";
import BpSelect from "@birdpaper-ui/components/select/index";
import BpInput from "@birdpaper-ui/components/input/index";
import BpInputNumber from "@birdpaper-ui/components/inputNumber/index";
import BpOption from "@birdpaper-ui/components/select/src/components/option.vue";
import { ColorPickerValueType } from "../types";
import { hslaToHex, hslToRgb } from "../useColor";

const alpha = defineModel<number>("alpha", { default: 1 });
const alphaValue = ref<number>(Math.floor(alpha.value * 100));

const props = defineProps({
  type: {
    type: String as PropType<ColorPickerValueType>,
    default: "hex",
  },
  color: {
    type: String,
    default: "",
  },
  hue: {
    type: Number,
    default: 0,
  },
  alpha: {
    type: Number,
    default: 1,
  },
  sv: {
    type: Object,
    default: () => ({ s: 0, v: 0 }),
  },
  sl: {
    type: Object,
    default: () => ({ s: 0, l: 0 }),
  },
});
const emits = defineEmits<{
  (e: "updateAlpha", val: number): void;
  (e: "updateByHex", val: string): void;
  (e: "updateByRgb", rgb: { r: number; g: number; b: number }): void;
}>();

const valueTypeList: ColorPickerValueType[] = ["hex", "rgb"];
const valueType = ref<ColorPickerValueType>(props.type || "hex");

const hexValue = ref<string>("");
const rgbValue = ref({ r: 0, g: 0, b: 0 });

const rgbR = computed({
  get: () => String(rgbValue.value.r),
  set: (v: string) => {
    rgbValue.value.r = Number(v) || 0;
  },
});
const rgbG = computed({
  get: () => String(rgbValue.value.g),
  set: (v: string) => {
    rgbValue.value.g = Number(v) || 0;
  },
});
const rgbB = computed({
  get: () => String(rgbValue.value.b),
  set: (v: string) => {
    rgbValue.value.b = Number(v) || 0;
  },
});

const updateByHex = () => {
  if (!hexValue.value) {
    return;
  }
  emits("updateByHex", hexValue.value);
};

const updateByRgb = () => {
  let { r, g, b } = rgbValue.value;
  if (isNaN(r)) r = 0;
  if (isNaN(g)) g = 0;
  if (isNaN(b)) b = 0;

  if (r < 0 || g < 0 || b < 0) return;
  if (r > 255 || g > 255 || b > 255) return;
  emits("updateByRgb", { r, g, b });
};

const onAlphaInput = () => {
  emits("updateAlpha", alphaValue.value / 100);
};

watch(
  () => alpha.value,
  (val) => {
    alphaValue.value = Math.floor(val * 100);
  }
);

watch(
  () => [props.hue, props.sv, props.sl, props.alpha, valueType.value],
  () => {
    if (valueType.value === "hex") {
      hexValue.value = hslaToHex(
        props.alpha === 1
          ? `hsl(${props.hue}, ${props.sl.s}%, ${props.sl.l}%)`
          : `hsla(${props.hue}, ${props.sl.s}%, ${props.sl.l}%, ${props.alpha})`
      );
      return;
    }
    if (valueType.value === "rgb") {
      const [r, g, b] = hslToRgb(props.hue, props.sl.s, props.sl.l);
      rgbValue.value = { r: Math.round(r), g: Math.round(g), b: Math.round(b) };
      return;
    }
  },
  { immediate: true, deep: true }
);
</script>
