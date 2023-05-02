import { App } from "vue";
import { getComponentsPrefix } from "../../utils/config";
import _select from "./src/select.vue";
import _option from "./src/option.vue";

_select.name = getComponentsPrefix() + _select.name;
_option.name = getComponentsPrefix() + _option.name;

const Select = Object.assign(_select, {
  install: (app: App) => {
    app.component(_select.name, _select);
    app.component(_option.name, _option);
  },
});

export type SelectInstance = InstanceType<typeof _select>;
export default Select;
