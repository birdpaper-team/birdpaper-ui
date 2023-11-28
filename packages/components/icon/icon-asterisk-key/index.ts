import type { App } from 'vue';
import _IconAsteriskKey from './icon-asterisk-key.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAsteriskKey.name = getComponentsPrefix() + _IconAsteriskKey.name;

const IconAsteriskKey = Object.assign(_IconAsteriskKey, {
  install: (app: App) => {
    app.component(_IconAsteriskKey.name, _IconAsteriskKey);
  }
});

export default IconAsteriskKey;