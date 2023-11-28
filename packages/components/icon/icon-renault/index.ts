import type { App } from 'vue';
import _IconRenault from './icon-renault.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRenault.name = getComponentsPrefix() + _IconRenault.name;

const IconRenault = Object.assign(_IconRenault, {
  install: (app: App) => {
    app.component(_IconRenault.name, _IconRenault);
  }
});

export default IconRenault;