import type { App } from 'vue';
import _IconAutoLineHeight from './icon-auto-line-height.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAutoLineHeight.name = getComponentsPrefix() + _IconAutoLineHeight.name;

const IconAutoLineHeight = Object.assign(_IconAutoLineHeight, {
  install: (app: App) => {
    app.component(_IconAutoLineHeight.name, _IconAutoLineHeight);
  }
});

export default IconAutoLineHeight;