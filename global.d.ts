declare module "vue" {
  export interface GlobalComponents {
    BpRow: typeof import("birdpaper-ui")["Row"];
    BpCol: typeof import("birdpaper-ui")["Col"];
    BpButton: typeof import("birdpaper-ui")["Button"];
    BpInput: typeof import("birdpaper-ui")["Input"];
    BpTable: typeof import("birdpaper-ui")["Table"];
    BpTableColumn: typeof import("birdpaper-ui")["TableColumn"];
    BpSelect: typeof import("birdpaper-ui")["Select"];
    BpOption: typeof import("birdpaper-ui")["Option"];
    BpSpace: typeof import("birdpaper-ui")["Space"];
    BpTrigger: typeof import("birdpaper-ui")["Trigger"];
    BpTooltip: typeof import("birdpaper-ui")["Tooltip"];
    BpLink: typeof import("birdpaper-ui")["Link"];
    BpTextarea: typeof import("birdpaper-ui")["Textarea"];
    BpRadio: typeof import("birdpaper-ui")["Radio"];
  }
}

export {};
