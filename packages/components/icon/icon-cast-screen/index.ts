import type { App } from 'vue';
import _IconCastScreen from './icon-cast-screen.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCastScreen.name = getComponentsPrefix() + _IconCastScreen.name;

const IconCastScreen = Object.assign(_IconCastScreen, {
  install: (app: App) => {
    app.component(_IconCastScreen.name, _IconCastScreen);
  }
});

export default IconCastScreen;