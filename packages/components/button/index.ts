import { App } from "vue";
import _button from "./src/button.vue";

_button.name = "bp-" + _button.name;

export const BpButton = Object.assign(_button, {
  install: (app: App) => {
    app.component(_button.name as string, _button);
  },
});

// export * from "./src/button";
export type ButtonInstance = InstanceType<typeof _button>;
export default BpButton;
