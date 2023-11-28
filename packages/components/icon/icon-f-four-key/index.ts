import type { App } from 'vue';
import _IconFFourKey from './icon-f-four-key.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFFourKey.name = getComponentsPrefix() + _IconFFourKey.name;

const IconFFourKey = Object.assign(_IconFFourKey, {
  install: (app: App) => {
    app.component(_IconFFourKey.name, _IconFFourKey);
  }
});

export default IconFFourKey;