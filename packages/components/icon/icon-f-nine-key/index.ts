import type { App } from 'vue';
import _IconFNineKey from './icon-f-nine-key.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFNineKey.name = getComponentsPrefix() + _IconFNineKey.name;

const IconFNineKey = Object.assign(_IconFNineKey, {
  install: (app: App) => {
    app.component(_IconFNineKey.name, _IconFNineKey);
  }
});

export default IconFNineKey;