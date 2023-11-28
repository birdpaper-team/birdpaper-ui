import type { App } from 'vue';
import _IconPaintedScreen from './icon-painted-screen.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPaintedScreen.name = getComponentsPrefix() + _IconPaintedScreen.name;

const IconPaintedScreen = Object.assign(_IconPaintedScreen, {
  install: (app: App) => {
    app.component(_IconPaintedScreen.name, _IconPaintedScreen);
  }
});

export default IconPaintedScreen;