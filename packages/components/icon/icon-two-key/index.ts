import type { App } from 'vue';
import _IconTwoKey from './icon-two-key.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTwoKey.name = getComponentsPrefix() + _IconTwoKey.name;

const IconTwoKey = Object.assign(_IconTwoKey, {
  install: (app: App) => {
    app.component(_IconTwoKey.name, _IconTwoKey);
  }
});

export default IconTwoKey;