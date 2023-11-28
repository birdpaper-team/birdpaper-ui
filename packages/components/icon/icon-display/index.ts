import type { App } from 'vue';
import _IconDisplay from './icon-display.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDisplay.name = getComponentsPrefix() + _IconDisplay.name;

const IconDisplay = Object.assign(_IconDisplay, {
  install: (app: App) => {
    app.component(_IconDisplay.name, _IconDisplay);
  }
});

export default IconDisplay;