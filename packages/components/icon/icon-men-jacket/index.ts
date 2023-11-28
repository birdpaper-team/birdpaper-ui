import type { App } from 'vue';
import _IconMenJacket from './icon-men-jacket.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMenJacket.name = getComponentsPrefix() + _IconMenJacket.name;

const IconMenJacket = Object.assign(_IconMenJacket, {
  install: (app: App) => {
    app.component(_IconMenJacket.name, _IconMenJacket);
  }
});

export default IconMenJacket;