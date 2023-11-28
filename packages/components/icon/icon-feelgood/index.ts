import type { App } from 'vue';
import _IconFeelgood from './icon-feelgood.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFeelgood.name = getComponentsPrefix() + _IconFeelgood.name;

const IconFeelgood = Object.assign(_IconFeelgood, {
  install: (app: App) => {
    app.component(_IconFeelgood.name, _IconFeelgood);
  }
});

export default IconFeelgood;