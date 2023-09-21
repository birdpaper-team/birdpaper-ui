import { App } from "vue";
import _form from "./src/form";
import _formItem from "./src/form-item";
import { getComponentsPrefix } from "../../utils/config";

_form.name = getComponentsPrefix() + _form.name;
_formItem.name = getComponentsPrefix() + _formItem.name;

const Form = Object.assign(_form, {
  install: (app: App) => {
    app.component(_form.name, _form);
    app.component(_formItem.name, _formItem);
  },
});

export type FormInstance = InstanceType<typeof _form>;
export type FormItemInstance = InstanceType<typeof _formItem>;
export default Form;
