/**
 * @ Author: Sam
 * @ Create Time: 2023-02-19 16:34:36
 * @ Modified by: Sam
 * @ Modified time: 2023-02-19 18:04:25
 * @ Description:
 */

import { App } from "vue";
import _button from "./src/button.vue";

const Button = Object.assign(_button, {
  install: (app: App) => {
    app.component(_button.name, _button);
  },
});

export default Button;
