import type { App } from 'vue';
import _IconCupFour from './icon-cup-four.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCupFour.name = getComponentsPrefix() + _IconCupFour.name;

const IconCupFour = Object.assign(_IconCupFour, {
  install: (app: App) => {
    app.component(_IconCupFour.name, _IconCupFour);
  }
});

export default IconCupFour;