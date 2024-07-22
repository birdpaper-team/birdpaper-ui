import type { vShow } from "vue";

declare global {
  const process: {
    env: {
      NODE_ENV: string;
    };
  };

  namespace JSX {
    interface IntrinsicAttributes {
      class?: any;
      style?: any;
    }
  }
}

declare module '*.vue' {
  import { App, defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent> & {
    install(app: App): void
  }
  export default component
}

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    Component: (props: { is: Component | string }) => void;
  }

  export interface ComponentCustomProperties {
    vShow: typeof vShow;
  }
}

export {};
