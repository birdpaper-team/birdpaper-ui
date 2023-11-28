import type { App } from 'vue';
import _IconEscalators from './icon-escalators.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEscalators.name = getComponentsPrefix() + _IconEscalators.name;

const IconEscalators = Object.assign(_IconEscalators, {
  install: (app: App) => {
    app.component(_IconEscalators.name, _IconEscalators);
  }
});

export default IconEscalators;