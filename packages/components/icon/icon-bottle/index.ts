import type { App } from 'vue';
import _IconBottle from './icon-bottle.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBottle.name = getComponentsPrefix() + _IconBottle.name;

const IconBottle = Object.assign(_IconBottle, {
  install: (app: App) => {
    app.component(_IconBottle.name, _IconBottle);
  }
});

export default IconBottle;