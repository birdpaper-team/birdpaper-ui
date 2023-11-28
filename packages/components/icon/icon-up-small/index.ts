import type { App } from 'vue';
import _IconUpSmall from './icon-up-small.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconUpSmall.name = getComponentsPrefix() + _IconUpSmall.name;

const IconUpSmall = Object.assign(_IconUpSmall, {
  install: (app: App) => {
    app.component(_IconUpSmall.name, _IconUpSmall);
  }
});

export default IconUpSmall;