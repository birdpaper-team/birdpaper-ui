<template>
  <div class="word-count-demo">
    <div class="demo-section">
      <h3>默认字数统计模式</h3>
      <div class="demo-item">
        <bp-textarea
          v-model="defaultText"
          placeholder="请输入文本"
          :maxlength="100"
          :rows="4"
          show-limit
        />
        <p>说明：显示所有字符数量，包括中文、英文、数字和符号</p>
      </div>
    </div>
    
    <div class="demo-section">
      <h3>中英文字符分别计数模式</h3>
      <div class="demo-item">
        <bp-textarea
          v-model="mixedText"
          placeholder="请输入中英文混合文本"
          :maxlength="200"
          :rows="4"
          show-limit
          word-count-mode="chinese-english"
        />
        <p>说明：分别统计中文字符和英文字符数量，显示格式为"中X英Y/最大长度"</p>
      </div>
    </div>
    
    <div class="demo-section">
      <h3>自定义计数规则 - 只统计单词数</h3>
      <div class="demo-item">
        <bp-textarea
          v-model="wordText"
          placeholder="请输入英文文本"
          :maxlength="50"
          :rows="4"
          show-limit
          word-count-mode="custom"
          :custom-word-count="countWords"
        />
        <p>说明：自定义计数规则，只统计英文单词数量</p>
      </div>
    </div>
    
    <div class="demo-section">
      <h3>自定义计数规则 - 只统计中文字符</h3>
      <div class="demo-item">
        <bp-textarea
          v-model="chineseText"
          placeholder="请输入中文文本"
          :maxlength="30"
          :rows="4"
          show-limit
          word-count-mode="custom"
          :custom-word-count="countChineseOnly"
        />
        <p>说明：自定义计数规则，只统计中文字符数量</p>
      </div>
    </div>
    
    <div class="demo-section">
      <h3>不显示最大长度限制</h3>
      <div class="demo-item">
        <bp-textarea
          v-model="noLimitText"
          placeholder="请输入文本"
          :rows="4"
          show-limit
          word-count-mode="chinese-english"
        />
        <p>说明：不设置最大长度，只显示当前字符统计</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 默认模式
const defaultText = ref('');

// 中英文混合模式
const mixedText = ref('Hello 世界\n这是一个多行文本示例\nThis is a multi-line text example');

// 自定义计数 - 单词数
const wordText = ref('Hello world, this is a test\nThis is a multi-line textarea\nWith multiple sentences');

// 自定义计数 - 仅中文字符
const chineseText = ref('这是一段中文文本\n包含多行内容\n用于测试中文字符统计');

// 无最大长度限制
const noLimitText = ref('Hello 世界\n这是一个多行文本示例\nThis is a multi-line text example');

/**
 * 自定义计数函数：统计单词数
 * @param value 输入值
 * @returns 单词数量
 */
const countWords = (value: string): number => {
  // 匹配英文单词
  const words = value.match(/\b[a-zA-Z]+\b/g);
  return words ? words.length : 0;
};

/**
 * 自定义计数函数：只统计中文字符
 * @param value 输入值
 * @returns 中文字符数量
 */
const countChineseOnly = (value: string): number => {
  const chineseRegex = /[\u4e00-\u9fa5]/g;
  const chineseMatches = value.match(chineseRegex) || [];
  return chineseMatches.length;
};
</script>

<style scoped>
.word-count-demo {
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