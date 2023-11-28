import type { App } from 'vue';
import _IconEnterKey from './icon-enter-key.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEnterKey.name = getComponentsPrefix() + _IconEnterKey.name;

const IconEnterKey = Object.assign(_IconEnterKey, {
  install: (app: App) => {
    app.component(_IconEnterKey.name, _IconEnterKey);
  }
});

export default IconEnterKey;