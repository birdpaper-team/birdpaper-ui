import { getPercentNumber } from "@birdpaper-ui/components/utils/helper";

/**
 * 将 HSLA 颜色值字符串转换为 HEX 颜色字符串
 * @param hsla - HSLA 颜色值字符串，例如 "hsla(360, 100%, 50%, 1)"
 * @returns 如果是有效的 HSLA 字符串，返回 HEX 颜色字符串；否则返回默认值
 */
export const hslaToHex = (hsla: string): string => {
  const match = hsla.match(/hsla?\((\d+(\.\d+)?),\s*(\d+(\.\d+)?)%,\s*(\d+(\.\d+)?)%,?\s*(\d+(\.\d+)?)?\)/);
  if (!match) return "FF0000";

  const h = parseFloat(match[1] || "0") / 360;
  const s = parseFloat(match[3] || "0") / 100;
  const l = parseFloat(match[5] || "0") / 100;
  const a = match[7] !== undefined ? parseFloat(match[7] || "0") : 1; // 如果没有透明度值，默认为 1
  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p: number, q: number, t: number): number => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  const toHex = (x: number): string => {
    const hex = Math.round(x * 255).toString(16).toLocaleUpperCase();
    return hex.length === 1 ? "0" + hex : hex;
  };

  const aHex = Math.round(a * 255)
    .toString(16)
    .padStart(2, "0")
    .toLocaleUpperCase();

  return a === 1 ? `${toHex(r)}${toHex(g)}${toHex(b)}` : `${toHex(r)}${toHex(g)}${toHex(b)}${aHex}`;
};

/**
 * 将 HEX 颜色字符串转换为 HSLA 颜色值
 * @param hex - HEX 颜色字符串，例如 "#RRGGBB" 或 "#RRGGBBAA"
 * @returns 如果是有效的 HEX 字符串，返回 HSLA 值的对象；否则返回默认值
 */
export const hexToHsla = (hex: string): { h: number; s: number; l: number; a: number } => {
  // 验证 HEX 格式（支持 3 / 6 / 8 位）
  let normalized = hex.startsWith("#") ? hex : `#${hex}`;
  const isValidHex = /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/.test(normalized);
  if (!isValidHex) return { h: 0, s: 100, l: 50, a: 1 };

  // Expand 3-digit hex to 6-digit
  if (normalized.length === 4) {
    normalized = `#${normalized[1]}${normalized[1]}${normalized[2]}${normalized[2]}${normalized[3]}${normalized[3]}`;
  }

  // 提取 RGB 和 Alpha 值
  const r = parseInt(normalized.slice(1, 3), 16);
  const g = parseInt(normalized.slice(3, 5), 16);
  const b = parseInt(normalized.slice(5, 7), 16);
  const a = normalized.length === 9 ? parseInt(normalized.slice(7, 9), 16) / 255 : 1;

  // 转换为 HSL
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;

  const max = Math.max(rNorm, gNorm, bNorm);
  const min = Math.min(rNorm, gNorm, bNorm);
  const delta = max - min;

  let h = 0;
  if (delta !== 0) {
    if (max === rNorm) {
      h = ((gNorm - bNorm) / delta + (gNorm < bNorm ? 6 : 0)) * 60;
    } else if (max === gNorm) {
      h = ((bNorm - rNorm) / delta + 2) * 60;
    } else {
      h = ((rNorm - gNorm) / delta + 4) * 60;
    }
  }

  const l = (max + min) / 2;
  const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  return {
    h: parseFloat(h.toFixed(2)),
    s: parseFloat((s * 100).toFixed(2)),
    l: parseFloat((l * 100).toFixed(2)),
    a,
  };
};

/**
 * 将 HSV 颜色空间转换为 RGB 颜色空间
 * @param h - 色相（Hue），取值范围为 0 到 360
 * @param s - 饱和度（Saturation），取值范围为 0 到 100
 * @param v - 明度（Value），取值范围为 0 到 100
 * @returns 一个包含 RGB 值的元组，每个值的范围为 0 到 255
 */
export const hsvToRgb = (h: number, s: number, v: number): [number, number, number] => {
  const f = (n: number) => {
    const k = (n + h / 60) % 6;
    const value = parseFloat((v * 255 * (1 - (s / 100) * Math.max(0, Math.min(k, 4 - k, 1)))).toFixed(4));
    return Math.min(255, Math.max(0, value));
  };
  return [f(5), f(3), f(1)];
};

/**
 * 将 HSV 颜色空间转换为 HSL 颜色空间
 * @param h - 色相（Hue），取值范围为 0 到 360
 * @param s - 饱和度（Saturation），取值范围为 0 到 100
 * @param v - 明度（Value），取值范围为 0 到 100
 * @returns 一个包含 HSL 值的对象
 */
export const hsvToHsla = (
  h: number,
  s: number,
  v: number,
  a: number = 1
): { h: number; s: number; l: number; a: number } => {
  s = s / 100;
  v = v / 100;

  let l = ((2 - s) * v) / 2;

  if (l !== 0) {
    if (l === 1) {
      s = 0;
    } else if (l < 0.5) {
      s = (s * v) / (l * 2);
    } else {
      s = (s * v) / (2 - l * 2);
    }
  }

  s = s * 100;
  l = l * 100;

  return { h, s, l, a: parseFloat(a.toFixed(4)) };
};

/**
 * 将 HSLA 颜色空间转换为 HSV 颜色空间
 * @param h - 色相（Hue），取值范围为 0 到 360
 * @param s - 饱和度（Saturation），取值范围为 0 到 100
 * @param l - 亮度（Lightness），取值范围为 0 到 100
 * @param a - 透明度（Alpha），取值范围为 0 到 1
 * @returns 一个包含 HSV 值的对象
 */
export const hslaToHsv = (h: number, s: number, l: number): { h: number; s: number; v: number } => {
  s = s / 100;
  l = l / 100;

  let v = l + s * Math.min(l, 1 - l);
  if (v === 0) {
    s = 0;
  } else {
    s = 2 * (1 - l / v);
  }

  s = s * 100;
  v = v * 100;

  return { h, s, v };
};

/**
 * 获取滑块的位置
 * @param ev - 鼠标事件对象
 * @param sliderBar - 滑块条的 HTML 元素
 * @param pointOffset - 滑块点的偏移量，默认为 0
 * @returns 滑块在滑块条上的位置（像素值）
 */
export const getSliderPosition = (ev: MouseEvent, sliderBar: HTMLElement, pointOffset: number = 0) => {
  const rect = sliderBar.getBoundingClientRect();
  const percent = getPercentNumber(ev.clientX - rect.left - pointOffset, rect.width, pointOffset);
  const x = percent * rect.width;
  const v = (x + pointOffset) / rect.width;

  return { x, v };
};

/**
 * 获取拾色器的位置
 * @param ev - 鼠标事件对象
 * @param pickerPanel - 拾色器面板的 HTML 元素
 * @param pointOffset - 拾色点的偏移量，默认为 0
 * @returns 拾色器在面板上的位置（像素值）以及对应的饱和度（Saturation）和亮度（Lightness）
 */
export const getPickerPosition = (ev: MouseEvent, pickerPanel: HTMLElement, pointOffset: number = 0) => {
  const rect = pickerPanel.getBoundingClientRect();
  const x = getPercentNumber(ev.clientX - rect.left - 6, rect.width, pointOffset) * rect.width;
  const y = getPercentNumber(ev.clientY - rect.top - 6, rect.height, pointOffset) * rect.height;
  const s = ((x + pointOffset) / rect.width) * 100; // 计算饱和度，范围为 0 到 100
  const v = 1 - (y + pointOffset) / rect.height; // 计算亮度，范围为 0 到 1

  return { x, y, s, v };
};

// 十六进制转 RGB
export function hexToRgb(hex: string): [number, number, number] {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3) {
    hex = (hex[0] || "0") + (hex[0] || "0") + (hex[1] || "0") + (hex[1] || "0") + (hex[2] || "0") + (hex[2] || "0");
  }
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return [r, g, b];
}

// RGB 转 HSL
export function rgbToHsla(rgb: string): { h: number; s: number; l: number; a: number } {
  const match = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(\.\d+)?))?\)$/);
  if (!match) {
    return { h: 0, s: 100, l: 50, a: 1 };
  }

  const r = parseInt(match[1] || "0", 10) / 255;
  const g = parseInt(match[2] || "0", 10) / 255;
  const b = parseInt(match[3] || "0", 10) / 255;
  const a = match[4] !== undefined ? parseFloat(match[4]) : 1;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0,
    s = 0,
    l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h *= 60;
  }

  return {
    h: parseFloat(h.toFixed(2)),
    s: parseFloat((s * 100).toFixed(2)),
    l: parseFloat((l * 100).toFixed(2)),
    a: parseFloat(a.toFixed(2)),
  };
}

// HSL 转 RGB
export function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  h /= 360;
  s /= 100;
  l /= 100;
  let r: number, g: number, b: number;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p: number, q: number, t: number): number => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  r = r * 255;
  g = g * 255;
  b = b * 255;
  return [r, g, b];
}

// RGB 转十六进制
export function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (x: number): string => {
    x = Math.round(x);
    const hex = x.toString(16).padStart(2, "0").toLocaleUpperCase();
    return hex;
  };
  return `${toHex(r)}${toHex(g)}${toHex(b)}`;
}
