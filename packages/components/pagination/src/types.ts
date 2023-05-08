import { Component } from "vue";

export interface PageinationProps {
  /** 自定义布局选项，英文逗号分割 */
  layout: string;
  total: number;
  pageNum: number;
  pageSize: number;
  sizesList: number[];
  pageCount: number;
  disabled: boolean;
  prevText: string;
  nextText: string;
}

export interface PageinationComponent {
  name: string;
  bind: object;
  component: Component;
  disabled: boolean;
  eventName: string;
  event: Function;
}
