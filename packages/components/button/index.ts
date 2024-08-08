import { App } from "vue";
import _button from "./src/button.vue";

_button.name = "bp-button";

const BpButton = Object.assign(_button, {
  install: (app: App) => {
    app.component(_button.name as string, _button);
  },
});

export default BpButton;
