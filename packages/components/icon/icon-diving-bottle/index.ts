import type { App } from 'vue';
import _IconDivingBottle from './icon-diving-bottle.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDivingBottle.name = getComponentsPrefix() + _IconDivingBottle.name;

const IconDivingBottle = Object.assign(_IconDivingBottle, {
  install: (app: App) => {
    app.component(_IconDivingBottle.name, _IconDivingBottle);
  }
});

export default IconDivingBottle;