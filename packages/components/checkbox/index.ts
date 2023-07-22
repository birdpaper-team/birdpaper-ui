import { App } from "vue";
import _checkbox from "./src/checkbox.vue";
import { getComponentsPrefix } from "../../utils/config";

_checkbox.name = getComponentsPrefix() + _checkbox.name;

const Checkbox = Object.assign(_checkbox, {
  install: (app: App) => {
    app.component(_checkbox.name, _checkbox);
  },
});

export type CheckboxInstance = InstanceType<typeof _checkbox>;
export default Checkbox;
