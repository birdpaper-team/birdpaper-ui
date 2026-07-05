<template>
  <div class="principle-page">
    <!-- Cards -->
    <div class="principle-cards">
      <div
        v-for="(item, index) in principles"
        :key="item.en"
        class="principle-card"
        :class="{ active: activeIndex === index }"
        @click="activeIndex = index"
      >
        <div class="card-glow" :class="`glow-${index}`"></div>
        <div class="card-icon" :class="`card-icon--${index}`">
          <component :is="item.icon" size="28px" fill="#ffffff" />
        </div>
        <div class="card-name">{{ item.name }}</div>
        <div class="card-en font-quick">{{ item.en }}</div>
      </div>
    </div>

    <!-- Content -->
    <div class="principle-content">
      <div class="content-bg" :class="`bg-${activeIndex}`"></div>

      <div class="content-header">
        <div class="content-slogan">{{ principles[activeIndex].slogan }}</div>
        <div class="content-desc">{{ principles[activeIndex].desc }}</div>
      </div>

      <div class="content-section">
        <div class="section-title">
          <span class="section-dot"></span>
          核心要义
        </div>
        <div class="points-grid">
          <div v-for="(p, i) in principles[activeIndex].points" :key="i" class="point-item">
            <div class="point-title">{{ p.title }}</div>
            <div class="point-text">{{ p.text }}</div>
          </div>
        </div>
      </div>

      <div class="content-section">
        <div class="section-title">
          <span class="section-dot"></span>
          设计指南
        </div>
        <ul class="guide-list">
          <li v-for="(g, i) in principles[activeIndex].guides" :key="i">{{ g }}</li>
        </ul>
      </div>
    </div>

    <!-- Relation -->
    <div class="principle-relation">
      <div class="relation-bg"></div>
      <div class="relation-title">价值观的关系</div>
      <div class="relation-desc">四个价值观并非独立存在，而是形成一个有机整体</div>
      <div class="relation-chain">
        <div class="chain-item">
          <div class="chain-icon chain-icon--simple">
            <component :is="principles[0].icon" size="20px" fill="#ffffff" />
          </div>
          <span class="chain-label">简约</span>
          <span class="chain-note">是基础</span>
        </div>
        <div class="chain-arrow">
          <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
            <path
              d="M0 6H36M36 6L30 1M36 6L30 11"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="chain-item">
          <div class="chain-icon chain-icon--agree">
            <component :is="principles[1].icon" size="20px" fill="#ffffff" />
          </div>
          <span class="chain-label">一致</span>
          <span class="chain-note">是保障</span>
        </div>
        <div class="chain-arrow">
          <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
            <path
              d="M0 6H36M36 6L30 1M36 6L30 11"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="chain-item">
          <div class="chain-icon chain-icon--natural">
            <component :is="principles[2].icon" size="20px" fill="#ffffff" />
          </div>
          <span class="chain-label">自然</span>
          <span class="chain-note">是目标</span>
        </div>
        <div class="chain-arrow">
          <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
            <path
              d="M0 6H36M36 6L30 1M36 6L30 11"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="chain-item">
          <div class="chain-icon chain-icon--grow">
            <component :is="principles[3].icon" size="20px" fill="#ffffff" />
          </div>
          <span class="chain-label">生长</span>
          <span class="chain-note">是动力</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, markRaw } from "vue";
import { IconSubtractLine, IconCheckDoubleLine, IconLeafLine, IconSeedlingLine } from "birdpaper-icon";

interface Point {
  title: string;
  text: string;
}

interface Principle {
  name: string;
  en: string;
  slogan: string;
  desc: string;
  icon: any;
  points: Point[];
  guides: string[];
}

const activeIndex = ref(0);

const principles: Principle[] = [
  {
    name: "简约",
    en: "Simple",
    slogan: "不做过多的设计，就是最好的设计。",
    desc: "尽可能的简化，剔除冗余元素，明确交互逻辑，在提升功能体验的同时大幅减少用户的操作成本。每一个元素的存在都应有明确的目的——如果拿掉它不影响用户的理解和操作，那它就不应该出现。",
    icon: markRaw(IconSubtractLine),
    points: [
      { title: "少即是多", text: "界面中每个像素都应有存在的理由，避免无意义的装饰性元素" },
      { title: "信息聚焦", text: "通过合理的层级划分，让用户第一眼看到最重要的内容" },
      { title: "降低噪音", text: "没有花哨的元素干扰用户判断，操作路径清晰直接" },
    ],
    guides: [
      "优先使用留白而非分割线来区分内容区域",
      "按钮、图标等交互元素保持克制，只在必要时出现",
      "文案简洁明了，避免冗余说明",
      "合理运用视觉权重引导用户注意力",
    ],
  },
  {
    name: "一致",
    en: "Agreed",
    slogan: "统一语言，减少使用门槛",
    desc: "视觉和交互的一致性是人机交互的基础。在颜色、样式、交互流程中保持高度的一致性，遵循统一的设计标准，保持品牌认知的同时传达精确的系统逻辑，降低用户的上手成本。",
    icon: markRaw(IconCheckDoubleLine),
    points: [
      { title: "视觉统一", text: "相同功能的元素在不同场景下保持一致的外观和行为" },
      { title: "交互可预期", text: "用户在某处学到的操作方式，可以自然迁移到其他场景" },
      { title: "术语规范", text: "相同的概念使用相同的名称和表达方式" },
    ],
    guides: [
      "颜色：相同语义始终使用同一颜色（如危险 = 红色）",
      "图标：同类操作使用同一系列图标，风格保持统一",
      "间距：遵循 4px 基准网格，使用预设的间距等级",
      "交互：相同类型的操作反馈方式一致（如成功提示）",
      "文案：按钮、标题、提示信息的措辞风格保持统一",
    ],
  },
  {
    name: "自然",
    en: "Naturally",
    slogan: "好的设计让人忘记设计的存在。",
    desc: "追求元素之间的自然协调，对每个间距、尺寸、颜色都控制得恰到好处，减少视觉冲击和理解成本，让用户更容易养成使用习惯。界面的运转应符合用户的心理模型，而非强迫用户去适应系统。",
    icon: markRaw(IconLeafLine),
    points: [
      { title: "符合直觉", text: "操作方式和结果符合用户的预期，不需要额外学习成本" },
      { title: "节奏和谐", text: "元素之间的间距、比例、动效形成自然的视觉韵律" },
      { title: "过渡平滑", text: "状态变化、页面切换时使用恰当的动效，避免突兀感" },
    ],
    guides: [
      "遵循自然阅读顺序（从左到右、从上到下）排列信息",
      "相关元素在空间上靠近，无关元素保持距离",
      "动效时长控制在 150ms ~ 300ms，使用 ease-out 缓动",
      "弹出层、抽屉等组件的出现位置与触发源保持空间关联",
    ],
  },
  {
    name: "生长",
    en: "Grow",
    slogan: "保持灵活，持续进化，适应不断变化的需求。",
    desc: "持续向上生长才能保证组件活力。赋予组件更多功能和特性，而非使用固有的一套设计标准和 API 去解决问题。保持灵活、开放、不断生长，才能更好地适应复杂业务逻辑和交互场景。",
    icon: markRaw(IconSeedlingLine),
    points: [
      { title: "开放扩展", text: "组件提供合理的插槽和配置项，支持业务侧定制" },
      { title: "渐进增强", text: "基础功能开箱即用，高级功能按需开启" },
      { title: "向前兼容", text: "版本迭代时保护已有用法，平滑过渡" },
    ],
    guides: [
      "组件 API 设计遵循「约定优于配置」，同时保留灵活的自定义能力",
      "新增功能不影响已有默认行为，通过属性开关控制",
      "提供清晰的版本迁移路径和废弃提示",
      "设计规范本身也在持续演进，吸纳社区反馈不断优化",
    ],
  },
];
</script>

<style lang="scss" scoped>
.principle-page {
  margin-top: 24px;
}

/* ── Cards ── */
.principle-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 32px;
}

.principle-card {
  position: relative;
  padding: 28px 20px 24px;
  border-radius: 16px;
  background: rgba(var(--bp-gray-0-rgb), 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(var(--bp-gray-3-rgb), 0.3);
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  }

  &.active {
    border-color: transparent;
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
  }
}

.card-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;

  .principle-card.active & {
    opacity: 1;
  }
}

.glow-0 {
  background: radial-gradient(circle at 50% 50%, rgba(var(--bp-primary-6-rgb), 0.12) 0%, transparent 60%);
}
.glow-1 {
  background: radial-gradient(circle at 50% 50%, rgba(var(--bp-danger-6-rgb), 0.12) 0%, transparent 60%);
}
.glow-2 {
  background: radial-gradient(circle at 50% 50%, rgba(var(--bp-warning-6-rgb), 0.12) 0%, transparent 60%);
}
.glow-3 {
  background: radial-gradient(circle at 50% 50%, rgba(var(--bp-success-6-rgb), 0.12) 0%, transparent 60%);
}

.card-icon {
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.card-icon--0 {
  background: linear-gradient(135deg, var(--bp-primary-6), var(--bp-primary-5));
  box-shadow: 0 4px 16px rgba(var(--bp-primary-6-rgb), 0.3);
}
.card-icon--1 {
  background: linear-gradient(135deg, var(--bp-danger-6), var(--bp-danger-5));
  box-shadow: 0 4px 16px rgba(var(--bp-danger-6-rgb), 0.3);
}
.card-icon--2 {
  background: linear-gradient(135deg, var(--bp-warning-6), var(--bp-warning-5));
  box-shadow: 0 4px 16px rgba(var(--bp-warning-6-rgb), 0.3);
}
.card-icon--3 {
  background: linear-gradient(135deg, var(--bp-success-6), var(--bp-success-4));
  box-shadow: 0 4px 16px rgba(var(--bp-success-6-rgb), 0.3);
}

.card-name {
  position: relative;
  font-size: 20px;
  font-weight: 600;
  color: var(--bp-gray-9);
  line-height: 1.4;
}

.card-en {
  position: relative;
  font-size: 13px;
  color: var(--bp-gray-5);
  margin-top: 4px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* ── Content ── */
.principle-content {
  position: relative;
  padding: 30px;
  border-radius: 20px;
  background: rgba(var(--bp-gray-0-rgb), 0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(var(--bp-gray-3-rgb), 0.3);
  overflow: hidden;
}

.content-bg {
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 300px;
  opacity: 0.5;
  pointer-events: none;
  filter: blur(60px);
  transition: background 0.5s ease;
}

.bg-0 {
  background: radial-gradient(circle, rgba(var(--bp-primary-6-rgb), 0.15), transparent 70%);
}
.bg-1 {
  background: radial-gradient(circle, rgba(var(--bp-danger-6-rgb), 0.15), transparent 70%);
}
.bg-2 {
  background: radial-gradient(circle, rgba(var(--bp-warning-6-rgb), 0.15), transparent 70%);
}
.bg-3 {
  background: radial-gradient(circle, rgba(var(--bp-success-6-rgb), 0.15), transparent 70%);
}

.content-header {
  position: relative;
  margin-bottom: 36px;
}

.content-slogan {
  font-size: 18px;
  font-weight: 600;
  color: var(--bp-gray-9);
  line-height: 1.6;
  padding-left: 16px;
  border-left: 3px solid var(--bp-primary-6);
  margin-bottom: 16px;
}

.content-desc {
  font-size: 13px;
  color: var(--bp-gray-6);
  line-height: 1.9;
}

/* ── Section ── */
.content-section {
  position: relative;
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }
}

.section-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: var(--bp-gray-9);
  margin-bottom: 20px;
}

.section-dot {
  width: 4px;
  height: 16px;
  border-radius: 2px;
  background: linear-gradient(180deg, var(--bp-primary-6), var(--bp-primary-4));
}

/* ── Points ── */
.points-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.point-item {
  padding: 20px;
  border-radius: 14px;
  background: rgba(var(--bp-gray-0-rgb), 0.8);
  border: 1px solid rgba(var(--bp-gray-3-rgb), 0.3);
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  }
}

.point-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--bp-gray-9);
  margin-bottom: 8px;
}

.point-text {
  font-size: 13px;
  color: var(--bp-gray-6);
  line-height: 1.8;
}

/* ── Guide list ── */
.guide-list {
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    position: relative;
    padding: 10px 0 10px 20px;
    font-size: 13px;
    color: var(--bp-gray-6);
    line-height: 1.8;
    border-bottom: 1px solid rgba(var(--bp-gray-3-rgb), 0.2);

    &:last-child {
      border-bottom: none;
    }

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 18px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--bp-primary-6), var(--bp-primary-4));
    }
  }
}

/* ── Relation ── */
.principle-relation {
  position: relative;
  margin-top: 40px;
  padding: 36px 32px;
  border-radius: 20px;
  background: rgba(var(--bp-gray-0-rgb), 0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(var(--bp-gray-3-rgb), 0.3);
  text-align: center;
  overflow: hidden;
}

.relation-bg {
  position: absolute;
  top: -40%;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 300px;
  background: radial-gradient(
    ellipse,
    rgba(var(--bp-primary-6-rgb), 0.08) 0%,
    rgba(var(--bp-success-6-rgb), 0.05) 30%,
    rgba(var(--bp-warning-6-rgb), 0.05) 60%,
    transparent 80%
  );
  filter: blur(40px);
  pointer-events: none;
}

.relation-title {
  position: relative;
  font-size: 18px;
  font-weight: 600;
  color: var(--bp-gray-9);
  margin-bottom: 8px;
}

.relation-desc {
  position: relative;
  font-size: 13px;
  color: var(--bp-gray-5);
  margin-bottom: 32px;
}

.relation-chain {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.chain-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 20px;
  border-radius: 14px;
  background: rgba(var(--bp-gray-0-rgb), 0.8);
  border: 1px solid rgba(var(--bp-gray-3-rgb), 0.3);
  min-width: 120px;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  }
}

.chain-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.chain-icon--simple {
  background: linear-gradient(135deg, var(--bp-primary-6), var(--bp-primary-5));
  box-shadow: 0 4px 12px rgba(var(--bp-primary-6-rgb), 0.25);
}
.chain-icon--agree {
  background: linear-gradient(135deg, var(--bp-danger-6), var(--bp-danger-5));
  box-shadow: 0 4px 12px rgba(var(--bp-danger-6-rgb), 0.25);
}
.chain-icon--natural {
  background: linear-gradient(135deg, var(--bp-warning-6), var(--bp-warning-5));
  box-shadow: 0 4px 12px rgba(var(--bp-warning-6-rgb), 0.25);
}
.chain-icon--grow {
  background: linear-gradient(135deg, var(--bp-success-6), var(--bp-success-4));
  box-shadow: 0 4px 12px rgba(var(--bp-success-6-rgb), 0.25);
}

.chain-label {
  font-size: 14px;
  font-weight: 600;
  color: var(--bp-gray-9);
}

.chain-note {
  font-size: 12px;
  color: var(--bp-gray-5);
  margin-top: 2px;
}

.chain-arrow {
  color: var(--bp-gray-4);
  flex-shrink: 0;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .principle-cards {
    grid-template-columns: repeat(2, 1fr);
  }

  .points-grid {
    grid-template-columns: 1fr;
  }

  .relation-chain {
    flex-wrap: wrap;
    gap: 12px;
  }

  .chain-arrow {
    display: none;
  }
}

@media (max-width: 480px) {
  .principle-cards {
    grid-template-columns: 1fr;
  }
}
</style>
