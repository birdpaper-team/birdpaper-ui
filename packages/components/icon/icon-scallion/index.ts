import type { App } from 'vue';
import _IconScallion from './icon-scallion.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconScallion.name = getComponentsPrefix() + _IconScallion.name;

const IconScallion = Object.assign(_IconScallion, {
  install: (app: App) => {
    app.component(_IconScallion.name, _IconScallion);
  }
});

export default IconScallion;