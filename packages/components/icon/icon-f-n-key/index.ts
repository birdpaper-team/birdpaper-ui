import type { App } from 'vue';
import _IconFNKey from './icon-f-n-key.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFNKey.name = getComponentsPrefix() + _IconFNKey.name;

const IconFNKey = Object.assign(_IconFNKey, {
  install: (app: App) => {
    app.component(_IconFNKey.name, _IconFNKey);
  }
});

export default IconFNKey;