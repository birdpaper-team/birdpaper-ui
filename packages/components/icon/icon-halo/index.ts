import type { App } from 'vue';
import _IconHalo from './icon-halo.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHalo.name = getComponentsPrefix() + _IconHalo.name;

const IconHalo = Object.assign(_IconHalo, {
  install: (app: App) => {
    app.component(_IconHalo.name, _IconHalo);
  }
});

export default IconHalo;