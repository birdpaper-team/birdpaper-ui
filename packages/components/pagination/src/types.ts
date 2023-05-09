import { Component } from "vue";

export interface PageinationProps {
  /** 自定义布局选项，英文逗号分割 */
  layout: string;
  /** 总条数 */
  total: number;
  /** 当前页 */
  pageNum: number;
  /** 每页条数 */
  pageSize: number;
  /** 每页条数选项 */
  sizesList: number[];
  /** 最大页码数，须为大于等于 5 且小于等于 21 的奇数 */
  maxPager: number;
  /** 是否禁用 */
  disabled: boolean;
  /** 上一页按钮文案 */
  prevText: string;
  /** 下一页按钮文案 */
  nextText: string;
  /** 总条数文案模板 */
  totalTmpString: string;
  /** 页码跳转文案模板 */
  jumperTmpString: string;
}

export interface PageinationComponent {
  name: string;
  bind: object;
  component: Component;
  disabled: boolean;
  eventName: string;
  event: Function;
}
