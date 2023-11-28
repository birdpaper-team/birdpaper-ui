import type { App } from 'vue';
import _IconScreenshot from './icon-screenshot.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconScreenshot.name = getComponentsPrefix() + _IconScreenshot.name;

const IconScreenshot = Object.assign(_IconScreenshot, {
  install: (app: App) => {
    app.component(_IconScreenshot.name, _IconScreenshot);
  }
});

export default IconScreenshot;