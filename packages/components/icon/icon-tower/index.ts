import type { App } from 'vue';
import _IconTower from './icon-tower.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTower.name = getComponentsPrefix() + _IconTower.name;

const IconTower = Object.assign(_IconTower, {
  install: (app: App) => {
    app.component(_IconTower.name, _IconTower);
  }
});

export default IconTower;