import type { App } from 'vue';
import _IconGas from './icon-gas.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGas.name = getComponentsPrefix() + _IconGas.name;

const IconGas = Object.assign(_IconGas, {
  install: (app: App) => {
    app.component(_IconGas.name, _IconGas);
  }
});

export default IconGas;