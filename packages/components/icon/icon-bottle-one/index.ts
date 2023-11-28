import type { App } from 'vue';
import _IconBottleOne from './icon-bottle-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBottleOne.name = getComponentsPrefix() + _IconBottleOne.name;

const IconBottleOne = Object.assign(_IconBottleOne, {
  install: (app: App) => {
    app.component(_IconBottleOne.name, _IconBottleOne);
  }
});

export default IconBottleOne;