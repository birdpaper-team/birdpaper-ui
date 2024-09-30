import _textarea from "./src/textarea.vue";

export const Textarea = _textarea;

export * from "./src/props";
// export * from "./src/types";

export type TextareaInstance = InstanceType<typeof Textarea>;
export default Textarea;
