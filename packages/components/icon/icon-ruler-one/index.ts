import type { App } from 'vue';
import _IconRulerOne from './icon-ruler-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRulerOne.name = getComponentsPrefix() + _IconRulerOne.name;

const IconRulerOne = Object.assign(_IconRulerOne, {
  install: (app: App) => {
    app.component(_IconRulerOne.name, _IconRulerOne);
  }
});

export default IconRulerOne;