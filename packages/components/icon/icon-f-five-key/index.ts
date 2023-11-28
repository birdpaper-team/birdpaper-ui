import type { App } from 'vue';
import _IconFFiveKey from './icon-f-five-key.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFFiveKey.name = getComponentsPrefix() + _IconFFiveKey.name;

const IconFFiveKey = Object.assign(_IconFFiveKey, {
  install: (app: App) => {
    app.component(_IconFFiveKey.name, _IconFFiveKey);
  }
});

export default IconFFiveKey;