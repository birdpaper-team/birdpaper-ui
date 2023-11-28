import type { App } from 'vue';
import _IconGoogleFill from './icon-google-fill.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGoogleFill.name = getComponentsPrefix() + _IconGoogleFill.name;

const IconGoogleFill = Object.assign(_IconGoogleFill, {
  install: (app: App) => {
    app.component(_IconGoogleFill.name, _IconGoogleFill);
  }
});

export default IconGoogleFill;