import type { App } from 'vue';
import _IconUnderline from './icon-underline.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconUnderline.name = getComponentsPrefix() + _IconUnderline.name;

const IconUnderline = Object.assign(_IconUnderline, {
  install: (app: App) => {
    app.component(_IconUnderline.name, _IconUnderline);
  }
});

export default IconUnderline;