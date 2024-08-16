declare module "vue" {
  export interface GlobalComponents {
    BpButton: typeof import("birdpaper-ui")["BpButton"];
  }
}

export {};
