import type { App } from 'vue';
import _IconFourKey from './icon-four-key.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFourKey.name = getComponentsPrefix() + _IconFourKey.name;

const IconFourKey = Object.assign(_IconFourKey, {
  install: (app: App) => {
    app.component(_IconFourKey.name, _IconFourKey);
  }
});

export default IconFourKey;