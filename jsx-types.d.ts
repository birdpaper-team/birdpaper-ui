import { DefineComponent, VNode } from 'vue'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elem: string]: any;
    }
    
    interface Element extends VNode {}
    interface ElementClass extends VNode {}
    interface ElementAttributesProperty {
      $props: {}
    }
    interface IntrinsicAttributes {
      [key: string]: any;
    }
  }
}

// 添加 Vue JSX 支持
declare module '@vue/runtime-core' {
  interface ComponentCustomProps {
    [key: string]: any;
  }
  
  // 处理 Teleport 组件
  export interface TeleportProps {
    to: string | HTMLElement;
    disabled?: boolean;
  }
  
  export const Teleport: DefineComponent<TeleportProps>;
}