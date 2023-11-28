import type { App } from 'vue';
import _IconFSevenKey from './icon-f-seven-key.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFSevenKey.name = getComponentsPrefix() + _IconFSevenKey.name;

const IconFSevenKey = Object.assign(_IconFSevenKey, {
  install: (app: App) => {
    app.component(_IconFSevenKey.name, _IconFSevenKey);
  }
});

export default IconFSevenKey;