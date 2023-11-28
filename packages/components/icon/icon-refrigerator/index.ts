import type { App } from 'vue';
import _IconRefrigerator from './icon-refrigerator.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRefrigerator.name = getComponentsPrefix() + _IconRefrigerator.name;

const IconRefrigerator = Object.assign(_IconRefrigerator, {
  install: (app: App) => {
    app.component(_IconRefrigerator.name, _IconRefrigerator);
  }
});

export default IconRefrigerator;