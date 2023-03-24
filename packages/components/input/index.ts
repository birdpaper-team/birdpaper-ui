import { App } from "vue";
import _input from "./src/input.vue";

_input.name = `bp-${_input.name}`;

const Input = Object.assign(_input, {
  install: (app: App) => {
    app.component(_input.name, _input);
  },
});

export type InputInstance = InstanceType<typeof _input>;
export default Input;
