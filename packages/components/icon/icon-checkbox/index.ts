import type { App } from 'vue';
import _IconCheckbox from './icon-checkbox.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCheckbox.name = getComponentsPrefix() + _IconCheckbox.name;

const IconCheckbox = Object.assign(_IconCheckbox, {
  install: (app: App) => {
    app.component(_IconCheckbox.name, _IconCheckbox);
  }
});

export default IconCheckbox;