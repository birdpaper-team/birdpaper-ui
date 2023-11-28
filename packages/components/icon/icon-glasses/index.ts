import type { App } from 'vue';
import _IconGlasses from './icon-glasses.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGlasses.name = getComponentsPrefix() + _IconGlasses.name;

const IconGlasses = Object.assign(_IconGlasses, {
  install: (app: App) => {
    app.component(_IconGlasses.name, _IconGlasses);
  }
});

export default IconGlasses;