import type { App } from 'vue';
import _IconClothesPants from './icon-clothes-pants.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconClothesPants.name = getComponentsPrefix() + _IconClothesPants.name;

const IconClothesPants = Object.assign(_IconClothesPants, {
  install: (app: App) => {
    app.component(_IconClothesPants.name, _IconClothesPants);
  }
});

export default IconClothesPants;