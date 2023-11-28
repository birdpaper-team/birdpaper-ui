import type { App } from 'vue';
import _IconInternalExpansion from './icon-internal-expansion.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconInternalExpansion.name = getComponentsPrefix() + _IconInternalExpansion.name;

const IconInternalExpansion = Object.assign(_IconInternalExpansion, {
  install: (app: App) => {
    app.component(_IconInternalExpansion.name, _IconInternalExpansion);
  }
});

export default IconInternalExpansion;