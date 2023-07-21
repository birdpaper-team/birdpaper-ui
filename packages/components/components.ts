// @ts-nocheck

// GlobalComponents for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    BpLink: typeof import('birdpaper-ui')['Link'];
  }
}

export {};
