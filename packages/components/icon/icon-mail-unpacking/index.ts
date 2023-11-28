import type { App } from 'vue';
import _IconMailUnpacking from './icon-mail-unpacking.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMailUnpacking.name = getComponentsPrefix() + _IconMailUnpacking.name;

const IconMailUnpacking = Object.assign(_IconMailUnpacking, {
  install: (app: App) => {
    app.component(_IconMailUnpacking.name, _IconMailUnpacking);
  }
});

export default IconMailUnpacking;