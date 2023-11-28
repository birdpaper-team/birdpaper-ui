import type { App } from 'vue';
import _IconClothesTurtleneck from './icon-clothes-turtleneck.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconClothesTurtleneck.name = getComponentsPrefix() + _IconClothesTurtleneck.name;

const IconClothesTurtleneck = Object.assign(_IconClothesTurtleneck, {
  install: (app: App) => {
    app.component(_IconClothesTurtleneck.name, _IconClothesTurtleneck);
  }
});

export default IconClothesTurtleneck;