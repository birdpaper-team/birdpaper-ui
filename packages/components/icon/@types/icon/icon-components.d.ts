declare module 'vue' {
    interface GlobalComponents {
        IconZoomIn: typeof import('birdpaper-ui/components/icon')['IconZoomIn'];
        IconZoomInternal: typeof import('birdpaper-ui/components/icon')['IconZoomInternal'];
        IconZoomOut: typeof import('birdpaper-ui/components/icon')['IconZoomOut'];
        IconZoom: typeof import('birdpaper-ui/components/icon')['IconZoom'];
    }
}
export {};
