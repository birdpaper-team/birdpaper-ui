import type { App } from 'vue';
import _IconFEightKey from './icon-f-eight-key.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFEightKey.name = getComponentsPrefix() + _IconFEightKey.name;

const IconFEightKey = Object.assign(_IconFEightKey, {
  install: (app: App) => {
    app.component(_IconFEightKey.name, _IconFEightKey);
  }
});

export default IconFEightKey;