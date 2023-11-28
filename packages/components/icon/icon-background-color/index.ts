import type { App } from 'vue';
import _IconBackgroundColor from './icon-background-color.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBackgroundColor.name = getComponentsPrefix() + _IconBackgroundColor.name;

const IconBackgroundColor = Object.assign(_IconBackgroundColor, {
  install: (app: App) => {
    app.component(_IconBackgroundColor.name, _IconBackgroundColor);
  }
});

export default IconBackgroundColor;