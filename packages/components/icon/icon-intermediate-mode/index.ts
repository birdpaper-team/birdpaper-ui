import type { App } from 'vue';
import _IconIntermediateMode from './icon-intermediate-mode.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconIntermediateMode.name = getComponentsPrefix() + _IconIntermediateMode.name;

const IconIntermediateMode = Object.assign(_IconIntermediateMode, {
  install: (app: App) => {
    app.component(_IconIntermediateMode.name, _IconIntermediateMode);
  }
});

export default IconIntermediateMode;