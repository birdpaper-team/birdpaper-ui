import type { App } from 'vue';
import _IconCheckboxCircleFill from './icon-checkbox-circle-fill.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCheckboxCircleFill.name = getComponentsPrefix() + _IconCheckboxCircleFill.name;

const IconCheckboxCircleFill = Object.assign(_IconCheckboxCircleFill, {
  install: (app: App) => {
    app.component(_IconCheckboxCircleFill.name, _IconCheckboxCircleFill);
  }
});

export default IconCheckboxCircleFill;