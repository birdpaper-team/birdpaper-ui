import type { App } from 'vue';
import _IconFontSize from './icon-font-size.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFontSize.name = getComponentsPrefix() + _IconFontSize.name;

const IconFontSize = Object.assign(_IconFontSize, {
  install: (app: App) => {
    app.component(_IconFontSize.name, _IconFontSize);
  }
});

export default IconFontSize;