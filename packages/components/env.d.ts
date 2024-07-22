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

declare module '*.module.less' {
  const classes: {
    readonly [key: string]: string
  }
  export default classes
  declare module '*.less'
}

declare module 'vue-virtual-scroller' {
  const vis: any;
  export default vis;
}