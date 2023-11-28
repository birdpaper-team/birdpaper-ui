import type { App } from 'vue';
import _IconChickenLeg from './icon-chicken-leg.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconChickenLeg.name = getComponentsPrefix() + _IconChickenLeg.name;

const IconChickenLeg = Object.assign(_IconChickenLeg, {
  install: (app: App) => {
    app.component(_IconChickenLeg.name, _IconChickenLeg);
  }
});

export default IconChickenLeg;