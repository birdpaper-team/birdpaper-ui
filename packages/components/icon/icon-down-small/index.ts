import type { App } from 'vue';
import _IconDownSmall from './icon-down-small.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDownSmall.name = getComponentsPrefix() + _IconDownSmall.name;

const IconDownSmall = Object.assign(_IconDownSmall, {
  install: (app: App) => {
    app.component(_IconDownSmall.name, _IconDownSmall);
  }
});

export default IconDownSmall;