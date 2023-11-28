import type { App } from 'vue';
import _IconTranslation from './icon-translation.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTranslation.name = getComponentsPrefix() + _IconTranslation.name;

const IconTranslation = Object.assign(_IconTranslation, {
  install: (app: App) => {
    app.component(_IconTranslation.name, _IconTranslation);
  }
});

export default IconTranslation;