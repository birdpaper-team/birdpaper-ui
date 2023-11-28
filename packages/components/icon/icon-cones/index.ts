import type { App } from 'vue';
import _IconCones from './icon-cones.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCones.name = getComponentsPrefix() + _IconCones.name;

const IconCones = Object.assign(_IconCones, {
  install: (app: App) => {
    app.component(_IconCones.name, _IconCones);
  }
});

export default IconCones;