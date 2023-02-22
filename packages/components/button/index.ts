/**
 * @ Author: Sam
 * @ Create Time: 2023-02-22 20:18:08
 * @ Modified by: Sam
 * @ Modified time: 2023-02-23 05:52:36
 */

import { App } from "vue";
import _button from "./src/button.vue";

const Button = Object.assign(_button, {
  install: (app: App) => {
    app.component(_button.name, _button);
  },
});

export default Button;
