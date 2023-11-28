import type { App } from 'vue';
import _IconError from './icon-error.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconError.name = getComponentsPrefix() + _IconError.name;

const IconError = Object.assign(_IconError, {
  install: (app: App) => {
    app.component(_IconError.name, _IconError);
  }
});

export default IconError;