import type { App } from 'vue';
import _IconWingsuitFlying from './icon-wingsuit-flying.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWingsuitFlying.name = getComponentsPrefix() + _IconWingsuitFlying.name;

const IconWingsuitFlying = Object.assign(_IconWingsuitFlying, {
  install: (app: App) => {
    app.component(_IconWingsuitFlying.name, _IconWingsuitFlying);
  }
});

export default IconWingsuitFlying;