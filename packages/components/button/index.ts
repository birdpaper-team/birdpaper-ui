import { App } from "vue";
import _button from "./src/button.vue";

const Button = Object.assign(_button, {
  install: (app: App) => {
    app.component(_button.name, _button);
  },
});

export default Button;
