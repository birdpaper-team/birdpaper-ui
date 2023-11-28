import type { App } from 'vue';
import _IconFiveKey from './icon-five-key.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFiveKey.name = getComponentsPrefix() + _IconFiveKey.name;

const IconFiveKey = Object.assign(_IconFiveKey, {
  install: (app: App) => {
    app.component(_IconFiveKey.name, _IconFiveKey);
  }
});

export default IconFiveKey;