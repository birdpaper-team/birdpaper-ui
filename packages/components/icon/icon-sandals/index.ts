import type { App } from 'vue';
import _IconSandals from './icon-sandals.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSandals.name = getComponentsPrefix() + _IconSandals.name;

const IconSandals = Object.assign(_IconSandals, {
  install: (app: App) => {
    app.component(_IconSandals.name, _IconSandals);
  }
});

export default IconSandals;