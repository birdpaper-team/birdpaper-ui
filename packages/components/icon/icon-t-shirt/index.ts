import type { App } from 'vue';
import _IconTShirt from './icon-t-shirt.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTShirt.name = getComponentsPrefix() + _IconTShirt.name;

const IconTShirt = Object.assign(_IconTShirt, {
  install: (app: App) => {
    app.component(_IconTShirt.name, _IconTShirt);
  }
});

export default IconTShirt;