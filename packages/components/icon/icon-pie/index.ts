import type { App } from 'vue';
import _IconPie from './icon-pie.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPie.name = getComponentsPrefix() + _IconPie.name;

const IconPie = Object.assign(_IconPie, {
  install: (app: App) => {
    app.component(_IconPie.name, _IconPie);
  }
});

export default IconPie;