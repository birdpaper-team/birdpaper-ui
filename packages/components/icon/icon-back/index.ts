import type { App } from 'vue';
import _IconBack from './icon-back.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBack.name = getComponentsPrefix() + _IconBack.name;

const IconBack = Object.assign(_IconBack, {
  install: (app: App) => {
    app.component(_IconBack.name, _IconBack);
  }
});

export default IconBack;