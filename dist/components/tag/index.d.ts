import { App } from "vue";
import _tag from "./src/tag.vue";
declare const Tag: ((props: Record<string, any> & {}) => any) & {
    install: (app: App) => void;
};
export declare type TagInstance = InstanceType<typeof _tag>;
export default Tag;
