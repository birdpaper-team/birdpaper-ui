<template>
  <div class="color-page">
    <!-- Copy mode -->
    <div class="color-toolbar">
      <span class="color-toolbar__hint">{{ t.toolbarHint }}</span>
      <div class="color-mode" role="tablist" :aria-label="t.copyFormatAria">
        <button
          type="button"
          role="tab"
          :aria-selected="copyMode === 'hex'"
          :class="{ active: copyMode === 'hex' }"
          @click="copyMode = 'hex'"
        >
          Hex
        </button>
        <button
          type="button"
          role="tab"
          :aria-selected="copyMode === 'token'"
          :class="{ active: copyMode === 'token' }"
          @click="copyMode = 'token'"
        >
          {{ t.cssVar }}
        </button>
      </div>
    </div>

    <!-- Functional colors -->
    <section class="color-section">
      <div class="color-section__head">
        <h2>{{ t.functionalTitle }}</h2>
        <p>{{ t.functionalDesc }}</p>
      </div>

      <div class="family-tabs">
        <button
          v-for="(family, i) in families"
          :key="family.key"
          type="button"
          class="family-tab"
          :class="[{ active: activeFamily === i }, `family-tab--${family.key}`]"
          @click="activeFamily = i"
        >
          <span class="family-tab__swatch" :style="{ background: family.mainHex }"></span>
          <span class="family-tab__meta">
            <strong>{{ familyDisplayName(family) }}</strong>
            <em v-if="!isEn">{{ family.en }}</em>
          </span>
        </button>
      </div>

      <div class="family-panel glass-card">
        <div class="family-panel__hero" :style="{ background: active.mainHex }" @click="copyColor(active.mainHex, active.token)">
          <div class="family-panel__hero-text">
            <span class="family-panel__name">{{ familyDisplayName(active) }}</span>
            <span class="family-panel__token font-mono">{{ active.token }}</span>
            <span class="family-panel__hex font-mono">{{ formatHex(active.mainHex) }}</span>
          </div>
          <span class="family-panel__badge">{{ t.mainBadge }}</span>
        </div>

        <div class="step-rail">
          <button
            v-for="item in active.steps"
            :key="item.step"
            type="button"
            class="step-cell"
            :class="{ 'is-main': item.step === 6, 'is-light': item.step <= 3 }"
            :style="{ background: item.hex }"
            :aria-label="`${item.token} ${item.hex}`"
            @click="copyColor(item.hex, item.token)"
          >
            <span class="step-cell__tip font-mono">{{ displayValue(item) }}</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Neutral -->
    <section class="color-section">
      <div class="color-section__head">
        <h2>{{ t.neutralTitle }}</h2>
        <p>{{ t.neutralDesc }}</p>
      </div>

      <div class="gray-panel glass-card">
        <div class="gray-rail">
          <button
            v-for="item in grays"
            :key="item.step"
            type="button"
            class="gray-cell"
            :class="{ 'is-light': item.step <= 2, 'is-edge': item.step === 0 }"
            :style="{ background: item.hex }"
            :aria-label="`${item.token} ${item.hex}`"
            @click="copyColor(item.hex, item.token)"
          >
            <span class="gray-cell__step">{{ item.step }}</span>
            <span class="gray-cell__tip font-mono">{{ displayValue(item) }}</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Usage levels -->
    <section class="color-section">
      <div class="color-section__head">
        <h2>{{ t.usageTitle }}</h2>
        <p>{{ t.usageDesc }}</p>
      </div>

      <div class="usage-grid">
        <div v-for="(row, i) in usageLevels" :key="row.level" class="usage-card glass-card">
          <div class="usage-card__swatches">
            <i
              v-for="s in row.sampleSteps"
              :key="s"
              :style="{ background: `var(--bp-primary-${s})` }"
            ></i>
          </div>
          <div class="usage-card__index font-quick">{{ String(i + 1).padStart(2, "0") }}</div>
          <h3>{{ row.level }}</h3>
          <p class="usage-card__step">{{ t.stepLabel(row.step) }}</p>
          <p class="usage-card__desc">{{ row.usage }}</p>
        </div>
      </div>
    </section>

    <!-- Code tips -->
    <section class="color-section">
      <div class="color-section__head">
        <h2>{{ t.varsTitle }}</h2>
        <p>{{ t.varsDesc }}</p>
      </div>

      <div class="code-grid">
        <div class="code-card glass-card">
          <div class="code-card__bar">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
            <em>token.css</em>
          </div>
          <pre><code><span class="tok-cmt">{{ t.codeBasic }}</span>
<span class="tok-prop">color</span>: <span class="tok-fn">var</span>(<span class="tok-var">--bp-primary-6</span>);

<span class="tok-cmt">{{ t.codeAlpha }}</span>
<span class="tok-prop">background</span>: <span class="tok-fn">rgba</span>(<span class="tok-fn">var</span>(<span class="tok-var">--bp-primary-6-rgb</span>), <span class="tok-num">0.1</span>);</code></pre>
        </div>

        <div class="code-card glass-card">
          <div class="code-card__bar">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
            <em>dark.css</em>
          </div>
          <pre><code><span class="tok-cmt">{{ t.codeLight }}</span>
<span class="tok-var">--bp-primary-6</span>: <span class="tok-str">#165dff</span>;

<span class="tok-cmt">{{ t.codeDark }}</span>
<span class="tok-var">--bp-primary-dark-6</span>: <span class="tok-str">#3c7eff</span>;</code></pre>
        </div>
      </div>

      <p class="color-note">
        {{ t.darkTipBefore }}<code>-dark-</code>{{ t.darkTipAfter }}
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useData } from "vitepress";
import { Message } from "@birdpaper-ui/components";

type CopyMode = "hex" | "token";

interface ColorStep {
  step: number;
  hex: string;
  token: string;
}

interface ColorFamily {
  key: string;
  name: string;
  en: string;
  mainHex: string;
  token: string;
  steps: ColorStep[];
}

interface UsageLevel {
  level: string;
  step: string;
  usage: string;
  sampleSteps: number[];
}

const { lang } = useData();
const isEn = computed(() => lang.value === "en");

const t = computed(() => {
  if (isEn.value) {
    return {
      toolbarHint: "Click a swatch to copy · Hover for the full value",
      copyFormatAria: "Copy format",
      cssVar: "CSS variable",
      functionalTitle: "Functional colors",
      functionalDesc:
        "Brand, success, warning, and danger semantic families — 10 steps each — for status and feedback.",
      mainBadge: "Main · 6",
      neutralTitle: "Neutral colors",
      neutralDesc: "Base steps for text, backgrounds, borders, and dividers — used most often.",
      usageTitle: "Step usage guide",
      usageDesc: "Levels by purpose for consistent, predictable semantics.",
      stepLabel: (step: string) => `Steps ${step}`,
      varsTitle: "Using variables",
      varsDesc: "Prefer semantic variables; use RGB channel variables when you need opacity.",
      codeBasic: "/* Basic usage */",
      codeAlpha: "/* With opacity */",
      codeLight: "/* Light mode */",
      codeDark: "/* Dark mode (step direction reversed) */",
      darkTipBefore: "Dark mode variables use a ",
      darkTipAfter:
        " infix; the component library adapts via CSS variables, so apps usually need no manual switch.",
      copied: (text: string) => `Copied ${text}`,
    };
  }
  return {
    toolbarHint: "点击色块复制 · 悬停查看完整色值",
    copyFormatAria: "复制格式",
    cssVar: "CSS 变量",
    functionalTitle: "功能色",
    functionalDesc: "品牌、成功、警告、危险四个语义色系，每系 10 阶，用于状态与反馈。",
    mainBadge: "主色 · 6",
    neutralTitle: "中性色",
    neutralDesc: "文本、背景、边框与分割线的基础色阶，使用频率最高。",
    usageTitle: "色阶使用规范",
    usageDesc: "按用途划分层级，保证语义一致、可预期。",
    stepLabel: (step: string) => `色阶 ${step}`,
    varsTitle: "变量用法",
    varsDesc: "优先使用语义变量；需要透明度时用 RGB 通道变量。",
    codeBasic: "/* 基础用法 */",
    codeAlpha: "/* 带透明度 */",
    codeLight: "/* 浅色模式 */",
    codeDark: "/* 深色模式（色阶方向反转） */",
    darkTipBefore: "深色模式变量带 ",
    darkTipAfter: " 中缀；组件库会通过 CSS 变量自动适配，业务侧通常无需手动切换。",
    copied: (text: string) => `已复制 ${text}`,
  };
});

const copyMode = ref<CopyMode>("hex");
const activeFamily = ref(0);

const buildSteps = (prefix: string, hexes: string[]): ColorStep[] =>
  hexes.map((hex, i) => ({
    step: i + 1,
    hex,
    token: `--bp-${prefix}-${i + 1}`,
  }));

const families: ColorFamily[] = [
  {
    key: "primary",
    name: "主题色",
    en: "Primary",
    mainHex: "#165dff",
    token: "--bp-primary-6",
    steps: buildSteps("primary", [
      "#e8f3ff",
      "#bedaff",
      "#94bfff",
      "#6aa1ff",
      "#4080ff",
      "#165dff",
      "#0e42d2",
      "#072ca6",
      "#031a79",
      "#000d4d",
    ]),
  },
  {
    key: "success",
    name: "成功色",
    en: "Success",
    mainHex: "#009622",
    token: "--bp-success-6",
    steps: buildSteps("success", [
      "#bfe8c6",
      "#8fe09a",
      "#58d66c",
      "#25c944",
      "#0aae2a",
      "#009622",
      "#007f1f",
      "#00681b",
      "#005117",
      "#003a11",
    ]),
  },
  {
    key: "warning",
    name: "警告色",
    en: "Warning",
    mainHex: "#ff7d00",
    token: "--bp-warning-6",
    steps: buildSteps("warning", [
      "#fff7e8",
      "#ffe4ba",
      "#ffcf8b",
      "#ffb65d",
      "#ff9a2e",
      "#ff7d00",
      "#d25f00",
      "#a64500",
      "#792e00",
      "#4d1b00",
    ]),
  },
  {
    key: "danger",
    name: "危险色",
    en: "Danger",
    mainHex: "#f53f3f",
    token: "--bp-danger-6",
    steps: buildSteps("danger", [
      "#ffece8",
      "#fdcdc5",
      "#fbaca3",
      "#f98981",
      "#f76560",
      "#f53f3f",
      "#cb272d",
      "#a1151e",
      "#770813",
      "#4d000a",
    ]),
  },
];

const grays: ColorStep[] = Array.from({ length: 11 }, (_, i) => {
  const hexes = [
    "#ffffff",
    "#fafafa",
    "#f0f0f0",
    "#d9d9d9",
    "#bfbfbf",
    "#8c8c8c",
    "#595959",
    "#434343",
    "#262626",
    "#1f1f1f",
    "#141414",
  ];
  return { step: i, hex: hexes[i], token: `--bp-gray-${i}` };
});

const usageLevelsZh: UsageLevel[] = [
  { level: "浅底", step: "1 – 2", usage: "背景色、标签底色", sampleSteps: [1, 2] },
  { level: "边框", step: "3 – 4", usage: "边框、分割线", sampleSteps: [3, 4] },
  { level: "辅助", step: "5", usage: "hover 态、辅助元素", sampleSteps: [5] },
  { level: "主色", step: "6", usage: "主要图标、文本、按钮", sampleSteps: [6] },
  { level: "交互", step: "7 – 8", usage: "hover / active 态", sampleSteps: [7, 8] },
  { level: "深色", step: "9 – 10", usage: "深色文本、深色背景", sampleSteps: [9, 10] },
];

const usageLevelsEn: UsageLevel[] = [
  { level: "Light base", step: "1 – 2", usage: "Backgrounds, tag fills", sampleSteps: [1, 2] },
  { level: "Border", step: "3 – 4", usage: "Borders, dividers", sampleSteps: [3, 4] },
  { level: "Assist", step: "5", usage: "Hover states, secondary elements", sampleSteps: [5] },
  { level: "Main", step: "6", usage: "Primary icons, text, and buttons", sampleSteps: [6] },
  { level: "Interactive", step: "7 – 8", usage: "Hover / active states", sampleSteps: [7, 8] },
  { level: "Deep", step: "9 – 10", usage: "Dark text, dark backgrounds", sampleSteps: [9, 10] },
];

const usageLevels = computed(() => (isEn.value ? usageLevelsEn : usageLevelsZh));

const active = computed(() => families[activeFamily.value]);

const familyDisplayName = (family: ColorFamily) => (isEn.value ? family.en : family.name);

const displayValue = (item: ColorStep) =>
  copyMode.value === "token" ? item.token : formatHex(item.hex);

const formatHex = (hex: string) => hex.toUpperCase();

const copyColor = async (hex: string, token: string) => {
  const text = copyMode.value === "token" ? `var(${token})` : formatHex(hex);
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const input = document.createElement("input");
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
  }
  Message.success({ content: t.value.copied(text), duration: 2000 });
};
</script>

<style lang="scss" scoped>
.color-page {
  --color-ease: cubic-bezier(0.22, 1, 0.36, 1);
  margin-top: 8px;
}

.font-mono {
  font-family: var(--vp-font-family-mono), ui-monospace, SFMono-Regular, Menlo, monospace;
}

.font-quick {
  font-family: var(--font-quick), Quicksand, sans-serif;
}

.glass-card {
  position: relative;
  border-radius: 18px;
  background: rgba(var(--bp-gray-0-rgb), 0.72);
  backdrop-filter: blur(16px) saturate(1.2);
  -webkit-backdrop-filter: blur(16px) saturate(1.2);
  border: 1px solid rgba(var(--bp-gray-3-rgb), 0.35);
  box-shadow: 0 12px 36px rgba(15, 23, 42, 0.06);
  overflow: hidden;
}

.dark .glass-card {
  background: rgba(28, 32, 42, 0.72);
  border-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
}

/* Toolbar */
.color-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 28px;
  flex-wrap: wrap;
}

.color-toolbar__hint {
  font-size: 13px;
  color: var(--vp-c-text-2);
}

.color-mode {
  display: inline-flex;
  padding: 4px;
  border-radius: 999px;
  background: rgba(var(--bp-gray-2-rgb), 0.7);
  border: 1px solid rgba(var(--bp-gray-3-rgb), 0.4);
}

.color-mode button {
  appearance: none;
  border: none;
  background: transparent;
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: background 0.25s var(--color-ease), color 0.25s ease, box-shadow 0.25s ease;
}

.color-mode button.active {
  background: var(--bp-gray-0);
  color: var(--bp-primary-6);
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);
}

.dark .color-mode {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.08);
}

.dark .color-mode button.active {
  background: rgba(255, 255, 255, 0.12);
  color: var(--bp-primary-5);
}

/* Sections */
.color-section {
  margin-bottom: 48px;
}

.color-section__head {
  margin-bottom: 18px;
}

.color-section__head h2 {
  margin: 0;
  padding: 0;
  border: none;
  font-size: 22px;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
}

.color-section__head p {
  margin: 8px 0 0;
  font-size: 14px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

/* Family tabs */
.family-tabs {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 16px;
}

.family-tab {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 14px;
  border-radius: 14px;
  border: 1px solid rgba(var(--bp-gray-3-rgb), 0.35);
  background: rgba(var(--bp-gray-0-rgb), 0.65);
  backdrop-filter: blur(12px);
  cursor: pointer;
  text-align: left;
  transition: transform 0.3s var(--color-ease), border-color 0.3s ease, box-shadow 0.3s ease;
}

.family-tab:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
}

.family-tab.active {
  transform: translateY(-2px);
  border-color: transparent;
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.1);
}

.family-tab--primary.active {
  box-shadow: 0 12px 28px rgba(var(--bp-primary-6-rgb), 0.18);
}
.family-tab--success.active {
  box-shadow: 0 12px 28px rgba(var(--bp-success-6-rgb), 0.18);
}
.family-tab--warning.active {
  box-shadow: 0 12px 28px rgba(var(--bp-warning-6-rgb), 0.18);
}
.family-tab--danger.active {
  box-shadow: 0 12px 28px rgba(var(--bp-danger-6-rgb), 0.18);
}

.family-tab__swatch {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.15);
}

.family-tab__meta {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.family-tab__meta strong {
  font-size: 14px;
  color: var(--vp-c-text-1);
  font-weight: 600;
}

.family-tab__meta em {
  font-style: normal;
  font-size: 12px;
  color: var(--vp-c-text-3);
  font-family: var(--font-quick), Quicksand, sans-serif;
}

.dark .family-tab {
  background: rgba(28, 32, 42, 0.65);
  border-color: rgba(255, 255, 255, 0.08);
}

/* Family panel */
.family-panel {
  padding: 0;
  overflow: visible;
}

.family-panel__hero {
  position: relative;
  z-index: 1;
  margin: 14px 14px 0;
  min-height: 112px;
  border-radius: 14px;
  padding: 22px 24px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  cursor: pointer;
  transition: filter 0.25s ease, transform 0.25s var(--color-ease);
}

.family-panel__hero:hover {
  filter: brightness(1.05);
  transform: translateY(-1px);
}

.family-panel__hero-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.family-panel__name {
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
}

.family-panel__token,
.family-panel__hex {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.88);
}

.family-panel__badge {
  flex-shrink: 0;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.28);
  backdrop-filter: blur(8px);
}

.step-rail {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(10, minmax(0, 1fr));
  gap: 8px;
  padding: 14px;
  overflow: visible;
}

.step-cell {
  appearance: none;
  border: none;
  position: relative;
  height: 56px;
  border-radius: 12px;
  cursor: pointer;
  padding: 0;
  display: grid;
  place-items: center;
  overflow: visible;
  transition: transform 0.28s var(--color-ease), box-shadow 0.28s ease;
}

.step-cell:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.16);
  z-index: 3;
}

.step-cell.is-main {
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.65), 0 8px 20px rgba(15, 23, 42, 0.18);
}

.step-cell__tip,
.gray-cell__tip {
  position: absolute;
  left: 50%;
  bottom: calc(100% + 8px);
  transform: translateX(-50%) translateY(4px);
  padding: 6px 10px;
  border-radius: 8px;
  background: rgba(20, 24, 34, 0.92);
  color: #fff;
  font-size: 12px;
  line-height: 1;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.2);
  transition: opacity 0.2s ease, transform 0.2s var(--color-ease), visibility 0.2s ease;
  z-index: 5;
}

.step-cell__tip::after,
.gray-cell__tip::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid transparent;
  border-top-color: rgba(20, 24, 34, 0.92);
}

.step-cell:hover .step-cell__tip,
.gray-cell:hover .gray-cell__tip {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

/* Gray */
.gray-panel {
  padding: 14px;
  overflow: visible;
}

.gray-rail {
  display: grid;
  grid-template-columns: repeat(11, minmax(0, 1fr));
  gap: 8px;
  overflow: visible;
}

.gray-cell {
  appearance: none;
  border: 1px solid transparent;
  position: relative;
  height: 56px;
  border-radius: 12px;
  cursor: pointer;
  padding: 0;
  display: grid;
  place-items: center;
  overflow: visible;
  transition: transform 0.28s var(--color-ease), box-shadow 0.28s ease;
}

.gray-cell.is-edge,
.gray-cell.is-light {
  border-color: rgba(var(--bp-gray-3-rgb), 0.55);
}

.gray-cell:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.14);
  z-index: 3;
}

.gray-cell__step {
  font-size: 14px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
}

.gray-cell.is-light .gray-cell__step,
.gray-cell.is-edge .gray-cell__step {
  color: rgba(20, 24, 34, 0.7);
}

/* Usage */
.usage-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.usage-card {
  padding: 18px 16px;
  transition: transform 0.3s var(--color-ease), box-shadow 0.3s ease;
}

.usage-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 32px rgba(15, 23, 42, 0.08);
}

.usage-card__swatches {
  display: flex;
  gap: 6px;
  margin-bottom: 14px;
}

.usage-card__swatches i {
  display: block;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(15, 23, 42, 0.12);
}

.usage-card__index {
  font-size: 12px;
  letter-spacing: 0.08em;
  color: var(--bp-primary-6);
  margin-bottom: 6px;
}

.usage-card h3 {
  margin: 0;
  font-size: 16px;
  color: var(--vp-c-text-1);
}

.usage-card__step {
  margin: 4px 0 0;
  font-size: 12px;
  font-weight: 600;
  color: var(--vp-c-text-3);
}

.usage-card__desc {
  margin: 8px 0 0;
  font-size: 13px;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}

/* Code */
.code-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.code-card {
  background: color-mix(in srgb, #141821 92%, transparent);
  border-color: rgba(255, 255, 255, 0.06);
  box-shadow: 0 14px 36px rgba(15, 23, 42, 0.12);
}

.code-card__bar {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(255, 255, 255, 0.03);
}

.code-card__bar .dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.code-card__bar .dot.red {
  background: #ff5f57;
}
.code-card__bar .dot.yellow {
  background: #febc2e;
}
.code-card__bar .dot.green {
  background: #28c840;
}

.code-card__bar em {
  margin-left: 8px;
  font-style: normal;
  font-size: 12px;
  color: rgba(255, 255, 245, 0.45);
}

.code-card pre {
  margin: 0;
  padding: 16px 18px 20px;
  overflow-x: auto;
}

.code-card code {
  font-family: var(--vp-font-family-mono), ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 13px;
  line-height: 1.7;
  color: rgba(255, 255, 245, 0.88);
  white-space: pre;
}

.tok-cmt {
  color: rgba(255, 255, 245, 0.38);
}
.tok-prop {
  color: #7dd3fc;
}
.tok-fn {
  color: #c4b5fd;
}
.tok-var {
  color: #86efac;
}
.tok-num {
  color: #fca5a5;
}
.tok-str {
  color: #fcd34d;
}

.color-note {
  margin: 14px 0 0;
  font-size: 13px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.color-note code {
  font-size: 12px;
  padding: 1px 6px;
  border-radius: 6px;
  background: rgba(var(--bp-primary-6-rgb), 0.08);
  color: var(--bp-primary-6);
}

@media (max-width: 960px) {
  .family-tabs,
  .usage-grid,
  .code-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .family-tabs,
  .usage-grid,
  .code-grid,
  .step-rail,
  .gray-rail {
    grid-template-columns: 1fr;
  }

  .step-rail,
  .gray-rail {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  .gray-rail {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
</style>
