import { App } from "vue";
import _buttonGroup from "./src/buttonGroup";
import { getComponentsPrefix } from "../../utils/config";

_buttonGroup.name = getComponentsPrefix() + _buttonGroup.name;

const ButtonGroup = Object.assign(_buttonGroup, {
  install: (app: App) => {
    app.component(_buttonGroup.name, _buttonGroup);
  },
});

export type ButtonGroupInstance = InstanceType<typeof _buttonGroup>;
export default ButtonGroup;
