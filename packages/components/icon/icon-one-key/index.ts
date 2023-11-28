import type { App } from 'vue';
import _IconOneKey from './icon-one-key.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconOneKey.name = getComponentsPrefix() + _IconOneKey.name;

const IconOneKey = Object.assign(_IconOneKey, {
  install: (app: App) => {
    app.component(_IconOneKey.name, _IconOneKey);
  }
});

export default IconOneKey;