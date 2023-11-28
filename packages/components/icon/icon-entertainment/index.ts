import type { App } from 'vue';
import _IconEntertainment from './icon-entertainment.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEntertainment.name = getComponentsPrefix() + _IconEntertainment.name;

const IconEntertainment = Object.assign(_IconEntertainment, {
  install: (app: App) => {
    app.component(_IconEntertainment.name, _IconEntertainment);
  }
});

export default IconEntertainment;