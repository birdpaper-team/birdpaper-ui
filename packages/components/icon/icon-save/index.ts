import type { App } from 'vue';
import _IconSave from './icon-save.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSave.name = getComponentsPrefix() + _IconSave.name;

const IconSave = Object.assign(_IconSave, {
  install: (app: App) => {
    app.component(_IconSave.name, _IconSave);
  }
});

export default IconSave;