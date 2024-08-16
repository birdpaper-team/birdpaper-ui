// @ts-nocheck

// GlobalComponents for Volar
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    BpButton: typeof import("birdpaper-ui")["Button"];
  }
}

export {};
