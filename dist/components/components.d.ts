declare module '@vue/runtime-core' {
    interface GlobalComponents {
        BpLink: typeof import('birdpaper-ui')['Link'];
    }
}
export {};
