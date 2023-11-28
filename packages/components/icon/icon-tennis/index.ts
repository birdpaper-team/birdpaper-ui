import type { App } from 'vue';
import _IconTennis from './icon-tennis.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTennis.name = getComponentsPrefix() + _IconTennis.name;

const IconTennis = Object.assign(_IconTennis, {
  install: (app: App) => {
    app.component(_IconTennis.name, _IconTennis);
  }
});

export default IconTennis;