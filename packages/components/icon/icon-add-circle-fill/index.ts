import type { App } from 'vue';
import _IconAddCircleFill from './icon-add-circle-fill.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAddCircleFill.name = getComponentsPrefix() + _IconAddCircleFill.name;

const IconAddCircleFill = Object.assign(_IconAddCircleFill, {
  install: (app: App) => {
    app.component(_IconAddCircleFill.name, _IconAddCircleFill);
  }
});

export default IconAddCircleFill;