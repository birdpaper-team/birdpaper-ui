import type { App } from 'vue';
import _IconAirplaneWindowOne from './icon-airplane-window-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAirplaneWindowOne.name = getComponentsPrefix() + _IconAirplaneWindowOne.name;

const IconAirplaneWindowOne = Object.assign(_IconAirplaneWindowOne, {
  install: (app: App) => {
    app.component(_IconAirplaneWindowOne.name, _IconAirplaneWindowOne);
  }
});

export default IconAirplaneWindowOne;