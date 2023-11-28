import type { App } from 'vue';
import _IconStethoscope from './icon-stethoscope.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconStethoscope.name = getComponentsPrefix() + _IconStethoscope.name;

const IconStethoscope = Object.assign(_IconStethoscope, {
  install: (app: App) => {
    app.component(_IconStethoscope.name, _IconStethoscope);
  }
});

export default IconStethoscope;