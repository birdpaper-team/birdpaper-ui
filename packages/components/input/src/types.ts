/**
 * @description 输入框类型 Input type，文本输入-text、密文输入-password
 */
export declare type InputType = "text" | "password";

/**
 * @description 输入框尺寸 Input size，迷你-mini、小型-small、默认-default、大型-large
 */
export declare type InputSize = "mini" | "small" | "default" | "large";

/**
 * @description 字数统计模式 Word count mode
 */
export declare type WordCountMode = "default" | "chinese-english" | "custom";

/**
 * @description 自定义字数统计函数 Custom word count function
 */
export declare type CustomWordCountFunction = (value: string) => number;