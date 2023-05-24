declare module '*.vue' {
  import { App, defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent> & {
    install(app: App): void
  }
  export default component
}
declare module '*.module.less' {
  const classes: {
    readonly [key: string]: string
  }
  export default classes
  declare module '*.less'
}