import type { App } from 'vue';
import _IconGoodOne from './icon-good-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGoodOne.name = getComponentsPrefix() + _IconGoodOne.name;

const IconGoodOne = Object.assign(_IconGoodOne, {
  install: (app: App) => {
    app.component(_IconGoodOne.name, _IconGoodOne);
  }
});

export default IconGoodOne;