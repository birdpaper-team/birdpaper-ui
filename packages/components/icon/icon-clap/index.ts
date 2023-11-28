import type { App } from 'vue';
import _IconClap from './icon-clap.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconClap.name = getComponentsPrefix() + _IconClap.name;

const IconClap = Object.assign(_IconClap, {
  install: (app: App) => {
    app.component(_IconClap.name, _IconClap);
  }
});

export default IconClap;