import type { App } from 'vue';
import _IconIncrease from './icon-increase.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconIncrease.name = getComponentsPrefix() + _IconIncrease.name;

const IconIncrease = Object.assign(_IconIncrease, {
  install: (app: App) => {
    app.component(_IconIncrease.name, _IconIncrease);
  }
});

export default IconIncrease;