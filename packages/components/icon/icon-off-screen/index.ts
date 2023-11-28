import type { App } from 'vue';
import _IconOffScreen from './icon-off-screen.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconOffScreen.name = getComponentsPrefix() + _IconOffScreen.name;

const IconOffScreen = Object.assign(_IconOffScreen, {
  install: (app: App) => {
    app.component(_IconOffScreen.name, _IconOffScreen);
  }
});

export default IconOffScreen;