import { App } from "vue";
import _button from "./src/button.vue";

_button.name = "bp-" + _button.name;

const BpButton = Object.assign(_button, {
  install: (app: App) => {
    app.component(_button.name, _button);
  },
});

export default BpButton;
