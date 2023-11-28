import type { App } from 'vue';
import _IconTent from './icon-tent.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTent.name = getComponentsPrefix() + _IconTent.name;

const IconTent = Object.assign(_IconTent, {
  install: (app: App) => {
    app.component(_IconTent.name, _IconTent);
  }
});

export default IconTent;