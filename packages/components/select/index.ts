import { App } from "vue";
import { getComponentsPrefix } from "../../utils/config";
import _select from "./src/select.vue";

_select.name = getComponentsPrefix() + _select.name;

const Select = Object.assign(_select, {
  install: (app: App) => {
    app.component(_select.name, _select);
  },
});

export type SelectInstance = InstanceType<typeof _select>;
export default Select;
