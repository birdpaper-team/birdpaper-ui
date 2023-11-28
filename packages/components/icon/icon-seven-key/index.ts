import type { App } from 'vue';
import _IconSevenKey from './icon-seven-key.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSevenKey.name = getComponentsPrefix() + _IconSevenKey.name;

const IconSevenKey = Object.assign(_IconSevenKey, {
  install: (app: App) => {
    app.component(_IconSevenKey.name, _IconSevenKey);
  }
});

export default IconSevenKey;