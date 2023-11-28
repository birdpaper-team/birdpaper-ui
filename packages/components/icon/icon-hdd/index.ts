import type { App } from 'vue';
import _IconHdd from './icon-hdd.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHdd.name = getComponentsPrefix() + _IconHdd.name;

const IconHdd = Object.assign(_IconHdd, {
  install: (app: App) => {
    app.component(_IconHdd.name, _IconHdd);
  }
});

export default IconHdd;