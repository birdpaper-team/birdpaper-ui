declare module "vue" {
  export interface GlobalComponents {
    BpButton: typeof import("birdpaper-ui")["Button"];
    BpInput: typeof import("birdpaper-ui")["Input"];
    BpTable: typeof import("birdpaper-ui")["Table"];
    BpTableColumn: typeof import("birdpaper-ui")["TableColumn"];
    BpTrigger: typeof import("birdpaper-ui")["Trigger"];
  }
}

export {};
