import _link from "./src/link.vue";

export const Link = _link;

export * from "./src/props";
export * from "./src/types";

export type LinkInstance = InstanceType<typeof Link>;
export default Link;
