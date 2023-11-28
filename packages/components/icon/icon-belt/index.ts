import type { App } from 'vue';
import _IconBelt from './icon-belt.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBelt.name = getComponentsPrefix() + _IconBelt.name;

const IconBelt = Object.assign(_IconBelt, {
  install: (app: App) => {
    app.component(_IconBelt.name, _IconBelt);
  }
});

export default IconBelt;