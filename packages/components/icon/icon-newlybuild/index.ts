import type { App } from 'vue';
import _IconNewlybuild from './icon-newlybuild.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconNewlybuild.name = getComponentsPrefix() + _IconNewlybuild.name;

const IconNewlybuild = Object.assign(_IconNewlybuild, {
  install: (app: App) => {
    app.component(_IconNewlybuild.name, _IconNewlybuild);
  }
});

export default IconNewlybuild;