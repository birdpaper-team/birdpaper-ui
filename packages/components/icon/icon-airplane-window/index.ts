import type { App } from 'vue';
import _IconAirplaneWindow from './icon-airplane-window.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAirplaneWindow.name = getComponentsPrefix() + _IconAirplaneWindow.name;

const IconAirplaneWindow = Object.assign(_IconAirplaneWindow, {
  install: (app: App) => {
    app.component(_IconAirplaneWindow.name, _IconAirplaneWindow);
  }
});

export default IconAirplaneWindow;