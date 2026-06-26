import { describe, expect, it } from "vitest";
import { ref } from "vue";
import { useWordCount } from "../src/use-word-count";

describe("useWordCount", () => {
  describe("default mode", () => {
    it("counts string length", () => {
      const value = ref("hello");
      const { getWordCount } = useWordCount({
        value,
        mode: ref("default"),
        maxlength: ref(null),
      });
      expect(getWordCount()).toBe(5);
    });

    it("formatWordCountDisplay without maxlength", () => {
      const value = ref("hello");
      const { formatWordCountDisplay } = useWordCount({
        value,
        mode: ref("default"),
        maxlength: ref(null),
      });
      expect(formatWordCountDisplay()).toBe("5");
    });

    it("formatWordCountDisplay with maxlength", () => {
      const value = ref("hello");
      const { formatWordCountDisplay } = useWordCount({
        value,
        mode: ref("default"),
        maxlength: ref(10),
      });
      expect(formatWordCountDisplay()).toBe("5/10");
    });

    it("truncateToMax truncates when over limit", () => {
      const value = ref("hello world");
      const { truncateToMax } = useWordCount({
        value,
        mode: ref("default"),
        maxlength: ref(5),
      });
      expect(truncateToMax("hello world")).toBe("hello");
    });

    it("truncateToMax returns original when under limit", () => {
      const value = ref("hi");
      const { truncateToMax } = useWordCount({
        value,
        mode: ref("default"),
        maxlength: ref(10),
      });
      expect(truncateToMax("hi")).toBe("hi");
    });

    it("truncateToMax returns original when no maxlength", () => {
      const value = ref("hello");
      const { truncateToMax } = useWordCount({
        value,
        mode: ref("default"),
        maxlength: ref(null),
      });
      expect(truncateToMax("hello")).toBe("hello");
    });
  });

  describe("chinese-english mode", () => {
    it("counts chinese and english separately", () => {
      const value = ref("你好abc");
      const { getWordCount } = useWordCount({
        value,
        mode: ref("chinese-english"),
        maxlength: ref(null),
      });
      expect(getWordCount()).toBe(5); // 2 chinese + 3 english
    });

    it("formatWordCountDisplay shows chinese and english counts", () => {
      const value = ref("你好abc");
      const { formatWordCountDisplay } = useWordCount({
        value,
        mode: ref("chinese-english"),
        maxlength: ref(10),
      });
      expect(formatWordCountDisplay()).toBe("中2英3/10");
    });

    it("formatWordCountDisplay without maxlength", () => {
      const value = ref("你好abc");
      const { formatWordCountDisplay } = useWordCount({
        value,
        mode: ref("chinese-english"),
        maxlength: ref(null),
      });
      expect(formatWordCountDisplay()).toBe("中2英3");
    });

    it("truncateToMax truncates by chinese-english count", () => {
      const value = ref("你好abc");
      const { truncateToMax } = useWordCount({
        value,
        mode: ref("chinese-english"),
        maxlength: ref(3),
      });
      expect(truncateToMax("你好abc")).toBe("你好a");
    });
  });

  describe("custom mode", () => {
    it("uses custom function for counting", () => {
      const value = ref("hello world");
      const { getWordCount } = useWordCount({
        value,
        mode: ref("custom"),
        maxlength: ref(null),
        customWordCount: ref((v: string) => v.split(" ").length),
      });
      expect(getWordCount()).toBe(2);
    });

    it("falls back to length when custom function is undefined", () => {
      const value = ref("hello");
      const { getWordCount } = useWordCount({
        value,
        mode: ref("custom"),
        maxlength: ref(null),
        customWordCount: ref(undefined),
      });
      expect(getWordCount()).toBe(5);
    });
  });

  it("handles empty value", () => {
    const value = ref("");
    const { getWordCount, formatWordCountDisplay } = useWordCount({
      value,
      mode: ref("default"),
      maxlength: ref(10),
    });
    expect(getWordCount()).toBe(0);
    expect(formatWordCountDisplay()).toBe("0/10");
  });

  it("getWordCount accepts override value", () => {
    const value = ref("hello");
    const { getWordCount } = useWordCount({
      value,
      mode: ref("default"),
      maxlength: ref(null),
    });
    expect(getWordCount("override")).toBe(8);
  });
});
