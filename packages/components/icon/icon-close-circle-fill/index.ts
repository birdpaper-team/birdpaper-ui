import type { App } from 'vue';
import _IconCloseCircleFill from './icon-close-circle-fill.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCloseCircleFill.name = getComponentsPrefix() + _IconCloseCircleFill.name;

const IconCloseCircleFill = Object.assign(_IconCloseCircleFill, {
  install: (app: App) => {
    app.component(_IconCloseCircleFill.name, _IconCloseCircleFill);
  }
});

export default IconCloseCircleFill;