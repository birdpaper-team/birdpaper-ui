import type { App } from 'vue';
import _IconClickTap from './icon-click-tap.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconClickTap.name = getComponentsPrefix() + _IconClickTap.name;

const IconClickTap = Object.assign(_IconClickTap, {
  install: (app: App) => {
    app.component(_IconClickTap.name, _IconClickTap);
  }
});

export default IconClickTap;