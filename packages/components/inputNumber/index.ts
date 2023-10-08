import { App } from "vue";
import _inputNumber from "./src/inputNumber.vue";
import { getComponentsPrefix } from "../../utils/config";

_inputNumber.name = getComponentsPrefix() + _inputNumber.name;

const InputNumber = Object.assign(_inputNumber, {
  install: (app: App) => {
    app.component(_inputNumber.name, _inputNumber);
  },
});

export type InputNumberInstance = InstanceType<typeof _inputNumber>;
export default InputNumber;
