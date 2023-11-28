import type { App } from 'vue';
import _IconPeach from './icon-peach.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPeach.name = getComponentsPrefix() + _IconPeach.name;

const IconPeach = Object.assign(_IconPeach, {
  install: (app: App) => {
    app.component(_IconPeach.name, _IconPeach);
  }
});

export default IconPeach;