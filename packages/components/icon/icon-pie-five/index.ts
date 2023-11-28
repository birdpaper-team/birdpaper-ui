import type { App } from 'vue';
import _IconPieFive from './icon-pie-five.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPieFive.name = getComponentsPrefix() + _IconPieFive.name;

const IconPieFive = Object.assign(_IconPieFive, {
  install: (app: App) => {
    app.component(_IconPieFive.name, _IconPieFive);
  }
});

export default IconPieFive;