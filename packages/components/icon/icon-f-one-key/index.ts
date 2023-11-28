import type { App } from 'vue';
import _IconFOneKey from './icon-f-one-key.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFOneKey.name = getComponentsPrefix() + _IconFOneKey.name;

const IconFOneKey = Object.assign(_IconFOneKey, {
  install: (app: App) => {
    app.component(_IconFOneKey.name, _IconFOneKey);
  }
});

export default IconFOneKey;