/**
 * @ Author: Sam
 * @ Create Time: 2023-02-22 20:18:08
 * @ Modified by: Sam
 * @ Modified time: 2023-03-09 13:53:52
 */

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
