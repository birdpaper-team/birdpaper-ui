import { App } from "vue";
import _button from "./src/button.vue";
export type { ButtonShape, ButtonType, ButtonSize, ButtonStatus } from "./src/types";

_button.name = `bp-${_button.name}`;

const Button = Object.assign(_button, {
  install: (app: App) => {
    app.component(_button.name, _button);
  },
});

export type ButtonInstance = InstanceType<typeof _button>;
export default Button;
