import type { App } from 'vue';
import _IconCroissant from './icon-croissant.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCroissant.name = getComponentsPrefix() + _IconCroissant.name;

const IconCroissant = Object.assign(_IconCroissant, {
  install: (app: App) => {
    app.component(_IconCroissant.name, _IconCroissant);
  }
});

export default IconCroissant;