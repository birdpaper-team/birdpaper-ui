import { App } from "vue";
import _input from "./src/input.vue";
import { getComponentsPrefix } from "../../utils/config";
export type { InputSize, InputType } from "./src/types";

_input.name = getComponentsPrefix() + _input.name;

const Input = Object.assign(_input, {
  install: (app: App) => {
    app.component(_input.name, _input);
  },
});

export type InputInstance = InstanceType<typeof _input>;
export default Input;
