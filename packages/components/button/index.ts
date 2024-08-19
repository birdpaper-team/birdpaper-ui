import { App } from "vue";
import _button from "./src/button.vue";

_button.name = "bp-" + _button.name?.toLocaleLowerCase();

export const Button = Object.assign(_button, {
  install: (app: App) => {
    app.component(_button.name as string, _button);
  },
});

export * from "./src/types";
export type ButtonInstance = InstanceType<typeof _button>;
export default Button;
