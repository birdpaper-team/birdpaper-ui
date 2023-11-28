import type { App } from 'vue';
import _IconDisabledLaptop from './icon-disabled-laptop.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDisabledLaptop.name = getComponentsPrefix() + _IconDisabledLaptop.name;

const IconDisabledLaptop = Object.assign(_IconDisabledLaptop, {
  install: (app: App) => {
    app.component(_IconDisabledLaptop.name, _IconDisabledLaptop);
  }
});

export default IconDisabledLaptop;