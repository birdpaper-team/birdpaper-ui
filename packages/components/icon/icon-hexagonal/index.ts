import type { App } from 'vue';
import _IconHexagonal from './icon-hexagonal.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHexagonal.name = getComponentsPrefix() + _IconHexagonal.name;

const IconHexagonal = Object.assign(_IconHexagonal, {
  install: (app: App) => {
    app.component(_IconHexagonal.name, _IconHexagonal);
  }
});

export default IconHexagonal;