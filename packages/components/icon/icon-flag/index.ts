import type { App } from 'vue';
import _IconFlag from './icon-flag.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFlag.name = getComponentsPrefix() + _IconFlag.name;

const IconFlag = Object.assign(_IconFlag, {
  install: (app: App) => {
    app.component(_IconFlag.name, _IconFlag);
  }
});

export default IconFlag;