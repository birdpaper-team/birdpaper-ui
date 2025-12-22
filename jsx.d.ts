/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

import { DefineComponent, VNode } from 'vue';
import { TeleportProps } from 'vue';

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass {
      $props: {};
    }
    interface ElementAttributesProperty {
      $props: {};
    }
    interface IntrinsicAttributes {
      [key: string]: any;
    }
    interface IntrinsicElements {
      [elemName: string]: any;
      // Add Teleport to intrinsic elements
      teleport: {
        to: string;
        disabled?: boolean;
        children?: any;
      };
    }
  }
}

// 添加 Vue JSX 支持
declare module '@vue/runtime-core' {
  export interface ComponentCustomProps {
    [key: string]: any;
  }
}