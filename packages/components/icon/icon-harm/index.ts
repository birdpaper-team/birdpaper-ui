import type { App } from 'vue';
import _IconHarm from './icon-harm.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHarm.name = getComponentsPrefix() + _IconHarm.name;

const IconHarm = Object.assign(_IconHarm, {
  install: (app: App) => {
    app.component(_IconHarm.name, _IconHarm);
  }
});

export default IconHarm;