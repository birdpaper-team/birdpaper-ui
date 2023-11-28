import type { App } from 'vue';
import _IconFullScreen from './icon-full-screen.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFullScreen.name = getComponentsPrefix() + _IconFullScreen.name;

const IconFullScreen = Object.assign(_IconFullScreen, {
  install: (app: App) => {
    app.component(_IconFullScreen.name, _IconFullScreen);
  }
});

export default IconFullScreen;