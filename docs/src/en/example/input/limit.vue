<template>
  <div class="word-count-demo">
    <div class="demo-section">
      <h3>Default character count mode</h3>
      <div class="demo-item">
        <bp-input
          v-model="defaultText"
          placeholder="Enter text"
          :maxlength="50"
          show-limit
        />
        <p>Note: Count all characters including Chinese, English, digits, and symbols</p>
      </div>
    </div>
    
    <div class="demo-section">
      <h3>Separate Chinese/English count mode</h3>
      <div class="demo-item">
        <bp-input
          v-model="mixedText"
          placeholder="Enter mixed Chinese/English text"
          :maxlength="100"
          show-limit
          word-count-mode="chinese-english"
        />
        <p>Note: Count Chinese and English characters separately; format is "CN X / EN Y / max"</p>
      </div>
    </div>
    
    <div class="demo-section">
      <h3>Custom count rule - word count only</h3>
      <div class="demo-item">
        <bp-input
          v-model="wordText"
          placeholder="Enter English text"
          :maxlength="30"
          show-limit
          word-count-mode="custom"
          :custom-word-count="countWords"
        />
        <p>Note: Custom rule that counts English words only</p>
      </div>
    </div>
    
    <div class="demo-section">
      <h3>Custom count rule - Chinese characters only</h3>
      <div class="demo-item">
        <bp-input
          v-model="chineseText"
          placeholder="Enter Chinese text"
          :maxlength="20"
          show-limit
          word-count-mode="custom"
          :custom-word-count="countChineseOnly"
        />
        <p>Note: Custom rule that counts Chinese characters only</p>
      </div>
    </div>
    
    <div class="demo-section">
      <h3>Hide max length</h3>
      <div class="demo-item">
        <bp-input
          v-model="noLimitText"
          placeholder="Enter text"
          show-limit
          word-count-mode="chinese-english"
        />
        <p>Note: No max length; only show current character count</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Default mode
const defaultText = ref('');

// CN/EN mixed mode
const mixedText = ref('Hello World');

// Custom count - words
const wordText = ref('Hello world, this is a test');

// Custom count - Chinese only
const chineseText = ref('This is Chinese text');

// No max length
const noLimitText = ref('');

/**
 * Custom counter: word count
 * @param value Input value
 * @returns Word count
 */
const countWords = (value: string): number => {
  // Match English words
  const words = value.match(/\b[a-zA-Z]+\b/g);
  return words ? words.length : 0;
};

/**
 * Custom counter: Chinese characters only
 * @param value Input value
 * @returns Chinese character count
 */
const countChineseOnly = (value: string): number => {
  const chineseRegex = /[\u4e00-\u9fa5]/g;
  const chineseMatches = value.match(chineseRegex) || [];
  return chineseMatches.length;
};
</script>

<style scoped>
.word-count-demo {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}

.demo-section {
  margin-bottom: 30px;
}

.demo-item {
  margin-bottom: 10px;
}

.demo-item p {
  font-size: 14px;
  color: #666;
  margin-top: 8px;
}

h2 {
  color: #333;
  margin-bottom: 20px;
}

h3 {
  color: #555;
  margin-bottom: 15px;
}
</style>