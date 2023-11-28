import type { App } from 'vue';
import _IconFontColor from './icon-font-color.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFontColor.name = getComponentsPrefix() + _IconFontColor.name;

const IconFontColor = Object.assign(_IconFontColor, {
  install: (app: App) => {
    app.component(_IconFontColor.name, _IconFontColor);
  }
});

export default IconFontColor;