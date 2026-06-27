<template>
  <div class="home-custom">
    <!-- Code Example -->
    <section class="code-section">
      <div class="section-header">
        <h2 class="section-title">几行代码，即刻上手</h2>
        <p class="section-desc">简洁的 API 设计，降低学习成本</p>
      </div>
      <div class="code-block-wrapper">
        <div class="code-block">
          <div class="code-header">
            <span class="code-dot red"></span>
            <span class="code-dot yellow"></span>
            <span class="code-dot green"></span>
            <span class="code-filename">App.vue</span>
          </div>
          <pre class="code-content"><code>&lt;template&gt;
  &lt;bp-button status="primary" @click="visible = true"&gt;
    打开对话框
  &lt;/bp-button&gt;

  &lt;bp-modal v-model="visible" title="标题"&gt;
    &lt;p&gt;这是一段内容&lt;/p&gt;
  &lt;/bp-modal&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'
const visible = ref(false)
&lt;/script&gt;</code></pre>
        </div>
      </div>
    </section>
  </div>

  <!-- Footer full width -->
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <div class="footer-logo">Birdpaper UI</div>
        <p class="footer-slogan">简洁、一致、高效的企业级 Vue 3 组件库</p>
      </div>
      <div class="footer-links">
        <div class="footer-col">
          <h4>资源</h4>
          <a href="/design/introduction">设计</a>
          <a href="/develop/install">开发</a>
          <a href="/components/button">组件</a>
        </div>
        <div class="footer-col">
          <h4>社区</h4>
          <a href="https://github.com/birdpaper-team/birdpaper-ui" target="_blank">GitHub</a>
          <a href="https://www.npmjs.com/package/birdpaper-ui" target="_blank">npm</a>
        </div>
        <div class="footer-col">
          <h4>帮助</h4>
          <a href="/develop/install">快速上手</a>
          <a href="/design/guide">样式指南</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>Released under the MIT License.</span>
      <span>Copyright © 2024-present Birdpaper Team</span>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.home-custom {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-title {
  font-size: 28px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 12px;
}

.section-desc {
  font-size: 16px;
  color: var(--vp-c-text-2);
  margin: 0;
}

.showcase-section {
  padding: 80px 0 60px;
}

.showcase-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.showcase-card {
  border: none;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  background: var(--vp-c-bg-soft);
}

.card-1 {
  transform: translateY(0);
}
.card-2 {
  transform: translateY(20px);
}
.card-3 {
  transform: translateY(-10px);
}
.card-4 {
  transform: translateY(28px);
}
.card-5 {
  transform: translateY(6px);
}
.card-6 {
  transform: translateY(-18px);
}

.card-1:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
}
.card-2:hover {
  transform: translateY(14px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
}
.card-3:hover {
  transform: translateY(-16px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
}
.card-4:hover {
  transform: translateY(22px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
}
.card-5:hover {
  transform: translateY(0);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
}
.card-6:hover {
  transform: translateY(-24px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
}

.showcase-preview {
  padding: 32px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.code-section {
  padding: 40px 0 80px;
}

.code-block-wrapper {
  max-width: 640px;
  margin: 0 auto;
}

.code-block {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.06);
}

.code-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 18px;
  background: #181825;
}

.code-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  &.red {
    background: #f38ba8;
  }
  &.yellow {
    background: #f9e2af;
  }
  &.green {
    background: #a6e3a1;
  }
}

.code-filename {
  margin-left: 8px;
  font-size: 12px;
  color: #6c7086;
  font-family: "SFMono-Regular", Consolas, monospace;
}

.code-content {
  margin: 0;
  padding: 24px;
  background: #1e1e2e;
  color: #cdd6f4;
  font-size: 14px;
  line-height: 1.75;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
  overflow-x: auto;
  code {
    background: none;
    padding: 0;
    border-radius: 0;
    font-size: inherit;
    color: inherit;
  }
}

.site-footer {
  padding: 64px 32px 0;
  background: var(--vp-c-bg-alt);
  border-top: 1px solid var(--vp-c-divider);
}

.footer-inner {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 48px;
  padding-bottom: 48px;
}

.footer-brand {
  max-width: 320px;
}

.footer-logo {
  font-size: 20px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 12px;
}

.footer-slogan {
  font-size: 14px;
  color: var(--vp-c-text-3);
  margin: 0;
  line-height: 1.6;
}

.footer-links {
  display: flex;
  gap: 64px;
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: 10px;
  h4 {
    font-size: 14px;
    font-weight: 600;
    color: var(--vp-c-text-1);
    margin: 0 0 4px;
  }
  a {
    font-size: 14px;
    color: var(--vp-c-text-2);
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
      color: var(--vp-c-brand-1);
    }
  }
}

.footer-bottom {
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px 0;
  border-top: 1px solid var(--vp-c-divider);
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: var(--vp-c-text-3);
}

@media (max-width: 768px) {
  .showcase-grid {
    grid-template-columns: 1fr 1fr;
  }
  .card-2,
  .card-3,
  .card-4,
  .card-5,
  .card-6 {
    transform: translateY(0) !important;
  }
  .section-title {
    font-size: 22px;
  }
  .footer-inner {
    flex-direction: column;
    gap: 32px;
  }
  .footer-links {
    gap: 40px;
    flex-wrap: wrap;
  }
  .footer-bottom {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .showcase-grid {
    grid-template-columns: 1fr;
  }
}
</style>
