import type { App } from 'vue';
import _IconOwl from './icon-owl.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconOwl.name = getComponentsPrefix() + _IconOwl.name;

const IconOwl = Object.assign(_IconOwl, {
  install: (app: App) => {
    app.component(_IconOwl.name, _IconOwl);
  }
});

export default IconOwl;