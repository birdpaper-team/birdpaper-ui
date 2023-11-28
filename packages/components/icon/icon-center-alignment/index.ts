import type { App } from 'vue';
import _IconCenterAlignment from './icon-center-alignment.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCenterAlignment.name = getComponentsPrefix() + _IconCenterAlignment.name;

const IconCenterAlignment = Object.assign(_IconCenterAlignment, {
  install: (app: App) => {
    app.component(_IconCenterAlignment.name, _IconCenterAlignment);
  }
});

export default IconCenterAlignment;