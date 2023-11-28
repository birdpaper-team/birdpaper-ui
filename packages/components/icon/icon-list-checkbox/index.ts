import type { App } from 'vue';
import _IconListCheckbox from './icon-list-checkbox.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconListCheckbox.name = getComponentsPrefix() + _IconListCheckbox.name;

const IconListCheckbox = Object.assign(_IconListCheckbox, {
  install: (app: App) => {
    app.component(_IconListCheckbox.name, _IconListCheckbox);
  }
});

export default IconListCheckbox;