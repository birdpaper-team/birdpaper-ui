import type { App } from 'vue';
import _IconCome from './icon-come.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCome.name = getComponentsPrefix() + _IconCome.name;

const IconCome = Object.assign(_IconCome, {
  install: (app: App) => {
    app.component(_IconCome.name, _IconCome);
  }
});

export default IconCome;