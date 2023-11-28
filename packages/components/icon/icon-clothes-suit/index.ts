import type { App } from 'vue';
import _IconClothesSuit from './icon-clothes-suit.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconClothesSuit.name = getComponentsPrefix() + _IconClothesSuit.name;

const IconClothesSuit = Object.assign(_IconClothesSuit, {
  install: (app: App) => {
    app.component(_IconClothesSuit.name, _IconClothesSuit);
  }
});

export default IconClothesSuit;