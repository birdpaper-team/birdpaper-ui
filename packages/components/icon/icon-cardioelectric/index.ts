import type { App } from 'vue';
import _IconCardioelectric from './icon-cardioelectric.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCardioelectric.name = getComponentsPrefix() + _IconCardioelectric.name;

const IconCardioelectric = Object.assign(_IconCardioelectric, {
  install: (app: App) => {
    app.component(_IconCardioelectric.name, _IconCardioelectric);
  }
});

export default IconCardioelectric;