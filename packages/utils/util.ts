/**
 * 判断是否为 null
 * @param {*} data
 * @returns
 */
export const isNull = (data: any) => !data && data != 0;

/**
 * 判断变量是否为字符串
 * @param {*} data
 * @returns {Boolean}
 */
export const isString = (data: any): boolean => typeof data === "string";

/**
 * 空格处理
 * @param {String} str
 * @returns
 */
export const trim = (str: any) => (str || "").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, "");

/**
 * 将字符串转换成对象格式
 * @param {String} str
 * @returns {Object} null
 */
export const strToObject = (str: string): object => {
  var finalObj: object = {};
  try {
    finalObj = JSON.parse(str);
  } catch (e) {
    finalObj = {};
  }

  return finalObj;
};

type ThrottledFunction<T extends (...args: any[]) => void> = (...args: Parameters<T>) => void;

export function throttle<T extends (...args: any[]) => void>(func: T, delay: number = 20): ThrottledFunction<T> {
  let lastExecution = 0;

  return function (...args: Parameters<T>) {
    const now = Date.now();
    if (now - lastExecution >= delay) {
      lastExecution = now;
      func(...args);
    }
  };
}

/**
 * 新增事件监听
 * @param {*} element
 * @param {*} event
 * @param {*} handler
 * @param {*} useCapture
 */
export const on = function (
  element: { addEventListener: (arg0: any, arg1: any, arg2: boolean) => void },
  event: any,
  handler: any,
  useCapture: any = false
) {
  if (element && event && handler) {
    element.addEventListener(event, handler, useCapture);
  }
};

/**
 * 移除事件监听
 * @param {*} element
 * @param {*} event
 * @param {*} handler
 * @param {*} useCapture
 */
export const off = function (
  element: { removeEventListener: (arg0: any, arg1: any, arg2: boolean) => void },
  event: any,
  handler: any,
  useCapture: any = false
) {
  if (element && event && handler) {
    element.removeEventListener(event, handler, useCapture);
  }
};

/**
 * 判断是否为偶数
 * @param {*} num
 */
export const isEvnetNum = (num: any) => Number(num) % 2 === 0;

/**
 * 将数值限制为整数
 * @param {*} v
 * @returns
 */
export const beInteger = (v: string) => {
  let val = v + "";
  return val.replace(/\D/g, "");
};

/**
 * 警告提示处理
 * @param {String} module
 * @param {*} info
 */
export const warn = (module: any, info: string) => {
  console.warn(`[ A warning of birdpaper-ui ] - ${module}: ` + info);
};

/**
 * 首字母大写
 * @param str
 * @returns
 */
export const firstToUpper = (str: string) => {
  return str.trim().toLowerCase().replace(str[0], str[0].toUpperCase());
};
/**
 * 判断对象是否为数组
 * @param obj
 * @returns
 */
export const isArray = (obj: any) => {
  return obj && typeof obj == "object" && obj instanceof Array;
};
/**
 * 对象深拷贝
 * @param tSource
 * @returns
 */
export function deepClone<T>(tSource: T, tTarget?: Record<string, any> | T): T {
  if (isArray(tSource)) {
    tTarget = tTarget || [];
  } else {
    tTarget = tTarget || {};
  }
  for (const key in tSource) {
    if (Object.prototype.hasOwnProperty.call(tSource, key)) {
      if (typeof tSource[key] === "object" && typeof tSource[key] !== null) {
        tTarget[key] = isArray(tSource[key]) ? [] : ({} as any);
        deepClone(tSource[key], tTarget[key]);
      } else {
        tTarget[key] = tSource[key];
      }
    }
  }
  return tTarget as T;
}

/**
 * 找出数组里是否含有某个属性值
 * @param arr
 * @param field
 * @param fieldValue
 * @returns number
 */
export function arrayIndexOf(arr: unknown[], field: string, fieldValue: unknown) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element[field] === fieldValue) return i;
  }

  return -1;
}

export function generateArray(len: number): string[] {
  const result: string[] = [];
  for (let i = 0; i < len; i++) {
    result.push(i.toString().padStart(2, "0"));
  }
  return result;
}
