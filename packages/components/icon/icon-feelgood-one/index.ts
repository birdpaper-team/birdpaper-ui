import type { App } from 'vue';
import _IconFeelgoodOne from './icon-feelgood-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFeelgoodOne.name = getComponentsPrefix() + _IconFeelgoodOne.name;

const IconFeelgoodOne = Object.assign(_IconFeelgoodOne, {
  install: (app: App) => {
    app.component(_IconFeelgoodOne.name, _IconFeelgoodOne);
  }
});

export default IconFeelgoodOne;