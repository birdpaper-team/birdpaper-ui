import type { App } from 'vue';
import _IconShield from './icon-shield.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconShield.name = getComponentsPrefix() + _IconShield.name;

const IconShield = Object.assign(_IconShield, {
  install: (app: App) => {
    app.component(_IconShield.name, _IconShield);
  }
});

export default IconShield;