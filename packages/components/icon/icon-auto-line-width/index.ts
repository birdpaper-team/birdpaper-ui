import type { App } from 'vue';
import _IconAutoLineWidth from './icon-auto-line-width.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAutoLineWidth.name = getComponentsPrefix() + _IconAutoLineWidth.name;

const IconAutoLineWidth = Object.assign(_IconAutoLineWidth, {
  install: (app: App) => {
    app.component(_IconAutoLineWidth.name, _IconAutoLineWidth);
  }
});

export default IconAutoLineWidth;