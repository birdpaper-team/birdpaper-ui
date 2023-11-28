import type { App } from 'vue';
import _IconDataScreen from './icon-data-screen.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDataScreen.name = getComponentsPrefix() + _IconDataScreen.name;

const IconDataScreen = Object.assign(_IconDataScreen, {
  install: (app: App) => {
    app.component(_IconDataScreen.name, _IconDataScreen);
  }
});

export default IconDataScreen;