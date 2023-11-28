import type { App } from 'vue';
import _IconClockTower from './icon-clock-tower.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconClockTower.name = getComponentsPrefix() + _IconClockTower.name;

const IconClockTower = Object.assign(_IconClockTower, {
  install: (app: App) => {
    app.component(_IconClockTower.name, _IconClockTower);
  }
});

export default IconClockTower;