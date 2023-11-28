import type { App } from 'vue';
import _IconPower from './icon-power.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPower.name = getComponentsPrefix() + _IconPower.name;

const IconPower = Object.assign(_IconPower, {
  install: (app: App) => {
    app.component(_IconPower.name, _IconPower);
  }
});

export default IconPower;