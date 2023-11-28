import type { App } from 'vue';
import _IconElevator from './icon-elevator.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconElevator.name = getComponentsPrefix() + _IconElevator.name;

const IconElevator = Object.assign(_IconElevator, {
  install: (app: App) => {
    app.component(_IconElevator.name, _IconElevator);
  }
});

export default IconElevator;