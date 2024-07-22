// For this project development
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    // BpButton: typeof import('../packages/birdpaper-ui')['button']
  }

  interface ComponentCustomProperties {
  }
}

export {}
