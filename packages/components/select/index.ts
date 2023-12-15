import { App } from "vue";
import { getComponentsPrefix } from "../../utils/config";
import _select from "./src/select.vue";
import _selectOption from "./src/option.vue";

_select.name = getComponentsPrefix() + _select.name;
_selectOption.name = getComponentsPrefix() + _selectOption.name;

const Select = Object.assign(_select, {
  install: (app: App) => {
    app.component(_select.name, _select);
    app.component(_selectOption.name, _selectOption);
  },
});

export type SelectInstance = InstanceType<typeof _select>;
export type SelectOptionInstance = InstanceType<typeof _selectOption>;
export default Select;
