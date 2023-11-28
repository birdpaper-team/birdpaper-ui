import type { App } from 'vue';
import _IconShorts from './icon-shorts.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconShorts.name = getComponentsPrefix() + _IconShorts.name;

const IconShorts = Object.assign(_IconShorts, {
  install: (app: App) => {
    app.component(_IconShorts.name, _IconShorts);
  }
});

export default IconShorts;