import type { App } from 'vue';
import _IconInternalReduction from './icon-internal-reduction.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconInternalReduction.name = getComponentsPrefix() + _IconInternalReduction.name;

const IconInternalReduction = Object.assign(_IconInternalReduction, {
  install: (app: App) => {
    app.component(_IconInternalReduction.name, _IconInternalReduction);
  }
});

export default IconInternalReduction;