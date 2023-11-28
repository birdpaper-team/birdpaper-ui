import type { App } from 'vue';
import _IconEightKey from './icon-eight-key.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEightKey.name = getComponentsPrefix() + _IconEightKey.name;

const IconEightKey = Object.assign(_IconEightKey, {
  install: (app: App) => {
    app.component(_IconEightKey.name, _IconEightKey);
  }
});

export default IconEightKey;