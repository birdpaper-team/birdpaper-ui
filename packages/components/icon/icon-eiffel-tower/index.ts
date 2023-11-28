import type { App } from 'vue';
import _IconEiffelTower from './icon-eiffel-tower.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEiffelTower.name = getComponentsPrefix() + _IconEiffelTower.name;

const IconEiffelTower = Object.assign(_IconEiffelTower, {
  install: (app: App) => {
    app.component(_IconEiffelTower.name, _IconEiffelTower);
  }
});

export default IconEiffelTower;