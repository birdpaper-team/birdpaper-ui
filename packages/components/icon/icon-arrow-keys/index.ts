import type { App } from 'vue';
import _IconArrowKeys from './icon-arrow-keys.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconArrowKeys.name = getComponentsPrefix() + _IconArrowKeys.name;

const IconArrowKeys = Object.assign(_IconArrowKeys, {
  install: (app: App) => {
    app.component(_IconArrowKeys.name, _IconArrowKeys);
  }
});

export default IconArrowKeys;