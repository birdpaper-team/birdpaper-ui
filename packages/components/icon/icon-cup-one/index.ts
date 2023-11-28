import type { App } from 'vue';
import _IconCupOne from './icon-cup-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCupOne.name = getComponentsPrefix() + _IconCupOne.name;

const IconCupOne = Object.assign(_IconCupOne, {
  install: (app: App) => {
    app.component(_IconCupOne.name, _IconCupOne);
  }
});

export default IconCupOne;