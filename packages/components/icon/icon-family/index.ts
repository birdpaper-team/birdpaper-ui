import type { App } from 'vue';
import _IconFamily from './icon-family.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFamily.name = getComponentsPrefix() + _IconFamily.name;

const IconFamily = Object.assign(_IconFamily, {
  install: (app: App) => {
    app.component(_IconFamily.name, _IconFamily);
  }
});

export default IconFamily;