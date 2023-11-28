import type { App } from 'vue';
import _IconMultiFunctionKnife from './icon-multi-function-knife.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMultiFunctionKnife.name = getComponentsPrefix() + _IconMultiFunctionKnife.name;

const IconMultiFunctionKnife = Object.assign(_IconMultiFunctionKnife, {
  install: (app: App) => {
    app.component(_IconMultiFunctionKnife.name, _IconMultiFunctionKnife);
  }
});

export default IconMultiFunctionKnife;