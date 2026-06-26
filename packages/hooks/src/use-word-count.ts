import { type Ref } from "vue";

export type WordCountMode = "default" | "chinese-english" | "custom";
export type CustomWordCountFunction = (value: string) => number;

export interface UseWordCountOptions {
  /** Current input value */
  value: Ref<string>;
  /** Word count mode */
  mode: Ref<WordCountMode>;
  /** Max length limit */
  maxlength: Ref<number | null>;
  /** Custom word count function */
  customWordCount?: Ref<CustomWordCountFunction | undefined>;
}

/**
 * Count Chinese and English characters separately.
 */
const countChineseEnglish = (value: string) => {
  const chineseRegex = /[\u4e00-\u9fa5]/g;
  const englishRegex = /[a-zA-Z]/g;
  return {
    chinese: (value.match(chineseRegex) || []).length,
    english: (value.match(englishRegex) || []).length,
  };
};

/**
 * Calculate word count based on mode.
 */
const calculateWordCount = (value: string, mode: WordCountMode, customFn?: CustomWordCountFunction): number => {
  const str = String(value || "");
  switch (mode) {
    case "chinese-english": {
      const { chinese, english } = countChineseEnglish(str);
      return chinese + english;
    }
    case "custom":
      return customFn ? customFn(str) : str.length;
    case "default":
    default:
      return str.length;
  }
};

/**
 * Shared composable for word count logic in Input and Textarea.
 */
export function useWordCount(options: UseWordCountOptions) {
  const { value, mode, maxlength, customWordCount } = options;

  const getWordCount = (val?: string): number => {
    return calculateWordCount(val ?? value.value, mode.value, customWordCount?.value);
  };

  const formatWordCountDisplay = (): string => {
    const str = String(value.value || "");

    if (mode.value === "chinese-english") {
      const { chinese, english } = countChineseEnglish(str);
      const max = maxlength.value;
      return max ? `中${chinese}英${english}/${max}` : `中${chinese}英${english}`;
    }

    const count = getWordCount();
    const max = maxlength.value;
    return max ? `${count}/${max}` : `${count}`;
  };

  /**
   * Truncate value to fit within maxlength based on word count mode.
   */
  const truncateToMax = (inputValue: string): string => {
    const max = maxlength.value;
    if (!max) return inputValue;

    const count = getWordCount(inputValue);
    if (count <= max) return inputValue;

    if (mode.value === "chinese-english") {
      let chineseCount = 0;
      let englishCount = 0;
      let result = "";
      for (let i = 0; i < inputValue.length; i++) {
        const char = inputValue[i];
        if (/[\u4e00-\u9fa5]/.test(char)) chineseCount++;
        else if (/[a-zA-Z]/.test(char)) englishCount++;
        if (chineseCount + englishCount > max) break;
        result += char;
      }
      return result;
    }

    if (mode.value === "custom" && customWordCount?.value) {
      let left = 0;
      let right = inputValue.length;
      let bestLength = 0;
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (customWordCount.value(inputValue.substring(0, mid)) <= max) {
          bestLength = mid;
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
      return inputValue.substring(0, bestLength);
    }

    return inputValue.substring(0, max);
  };

  return {
    getWordCount,
    formatWordCountDisplay,
    truncateToMax,
  };
}
