import _button from "./src/button.vue";

export const Button = _button;

export * from "./src/types";
export * from "./src/props";
export type ButtonInstance = InstanceType<typeof Button>;
export default Button;
