import type { App } from 'vue';
import _IconSixKey from './icon-six-key.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSixKey.name = getComponentsPrefix() + _IconSixKey.name;

const IconSixKey = Object.assign(_IconSixKey, {
  install: (app: App) => {
    app.component(_IconSixKey.name, _IconSixKey);
  }
});

export default IconSixKey;