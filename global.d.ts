declare module "vue" {
  export interface GlobalComponents {
    BpButton: typeof import("birdpaper-ui")["Button"];
    BpInput: typeof import("birdpaper-ui")["Input"];
  }
}

export {};
