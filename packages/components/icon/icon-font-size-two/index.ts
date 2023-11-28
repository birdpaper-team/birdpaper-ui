import type { App } from 'vue';
import _IconFontSizeTwo from './icon-font-size-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFontSizeTwo.name = getComponentsPrefix() + _IconFontSizeTwo.name;

const IconFontSizeTwo = Object.assign(_IconFontSizeTwo, {
  install: (app: App) => {
    app.component(_IconFontSizeTwo.name, _IconFontSizeTwo);
  }
});

export default IconFontSizeTwo;