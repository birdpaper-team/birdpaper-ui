import type { App } from 'vue';
import _IconForm from './icon-form.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconForm.name = getComponentsPrefix() + _IconForm.name;

const IconForm = Object.assign(_IconForm, {
  install: (app: App) => {
    app.component(_IconForm.name, _IconForm);
  }
});

export default IconForm;