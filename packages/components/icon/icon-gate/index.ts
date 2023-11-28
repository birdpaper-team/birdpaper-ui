import type { App } from 'vue';
import _IconGate from './icon-gate.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGate.name = getComponentsPrefix() + _IconGate.name;

const IconGate = Object.assign(_IconGate, {
  install: (app: App) => {
    app.component(_IconGate.name, _IconGate);
  }
});

export default IconGate;