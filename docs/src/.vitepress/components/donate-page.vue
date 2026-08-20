<template>
  <div class="bp-donate" :class="{ 'is-en': lang === 'en' }">
    <section class="bp-donate__hero">
      <p class="bp-donate__eyebrow">
        <span class="pulse"></span>
        {{ t.eyebrow }}
      </p>
      <p class="bp-donate__brand">{{ t.brand }}</p>
      <h1 class="bp-donate__headline">{{ t.headline }}</h1>
    </section>

    <section class="bp-donate__cards" aria-label="Sponsor links">
      <a
        class="donate-card"
        href="https://moya.plus"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="donate-card__label">{{ t.siteLabel }}</span>
        <h2>{{ t.siteTitle }}</h2>
        <span class="donate-card__cta">{{ t.siteCta }}</span>
      </a>

      <a
        class="donate-card donate-card--accent"
        href="https://www.moya.plus/sponsor"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="donate-card__label">{{ t.sponsorLabel }}</span>
        <h2>{{ t.sponsorTitle }}</h2>
        <span class="donate-card__cta donate-card__cta--primary">{{ t.sponsorCta }}</span>
      </a>
    </section>

    <p class="bp-donate__thanks">{{ t.thanks }}</p>
  </div>
</template>

<script setup lang="ts">
import { useData } from "vitepress";
import { computed } from "vue";
import { donateLocales, type DonateLocale } from "./donate-locales";

const { lang: rawLang } = useData();
const lang = computed(() => (rawLang.value?.startsWith("en") ? "en" : "zh-CN"));
const t = computed<DonateLocale>(() => donateLocales[lang.value]);
</script>
