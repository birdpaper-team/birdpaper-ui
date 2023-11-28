import type { App } from 'vue';
import _IconKey from './icon-key.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconKey.name = getComponentsPrefix() + _IconKey.name;

const IconKey = Object.assign(_IconKey, {
  install: (app: App) => {
    app.component(_IconKey.name, _IconKey);
  }
});

export default IconKey;