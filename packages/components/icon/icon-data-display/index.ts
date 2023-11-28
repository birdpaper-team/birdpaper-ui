import type { App } from 'vue';
import _IconDataDisplay from './icon-data-display.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDataDisplay.name = getComponentsPrefix() + _IconDataDisplay.name;

const IconDataDisplay = Object.assign(_IconDataDisplay, {
  install: (app: App) => {
    app.component(_IconDataDisplay.name, _IconDataDisplay);
  }
});

export default IconDataDisplay;