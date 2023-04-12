import { App } from "vue";
import _button from "./src/button.vue";
import { getComponentsPrefix } from "../../utils/config";

export type { ButtonShape, ButtonType, ButtonSize, ButtonStatus } from "./src/types";

_button.name = getComponentsPrefix() + _button.name;

const Button = Object.assign(_button, {
  install: (app: App) => {
    app.component(_button.name, _button);
  },
});

export type ButtonInstance = InstanceType<typeof _button>;
export default Button;
