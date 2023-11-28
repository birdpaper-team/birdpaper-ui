import type { App } from 'vue';
import _IconFileDisplay from './icon-file-display.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileDisplay.name = getComponentsPrefix() + _IconFileDisplay.name;

const IconFileDisplay = Object.assign(_IconFileDisplay, {
  install: (app: App) => {
    app.component(_IconFileDisplay.name, _IconFileDisplay);
  }
});

export default IconFileDisplay;