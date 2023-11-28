import type { App } from 'vue';
import _IconLincoln from './icon-lincoln.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLincoln.name = getComponentsPrefix() + _IconLincoln.name;

const IconLincoln = Object.assign(_IconLincoln, {
  install: (app: App) => {
    app.component(_IconLincoln.name, _IconLincoln);
  }
});

export default IconLincoln;