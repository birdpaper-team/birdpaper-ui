import type { App } from 'vue';
import _IconSignalTower from './icon-signal-tower.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSignalTower.name = getComponentsPrefix() + _IconSignalTower.name;

const IconSignalTower = Object.assign(_IconSignalTower, {
  install: (app: App) => {
    app.component(_IconSignalTower.name, _IconSignalTower);
  }
});

export default IconSignalTower;