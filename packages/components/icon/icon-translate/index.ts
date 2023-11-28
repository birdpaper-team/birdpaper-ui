import type { App } from 'vue';
import _IconTranslate from './icon-translate.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTranslate.name = getComponentsPrefix() + _IconTranslate.name;

const IconTranslate = Object.assign(_IconTranslate, {
  install: (app: App) => {
    app.component(_IconTranslate.name, _IconTranslate);
  }
});

export default IconTranslate;