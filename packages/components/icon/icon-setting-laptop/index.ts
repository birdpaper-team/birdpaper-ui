import type { App } from 'vue';
import _IconSettingLaptop from './icon-setting-laptop.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSettingLaptop.name = getComponentsPrefix() + _IconSettingLaptop.name;

const IconSettingLaptop = Object.assign(_IconSettingLaptop, {
  install: (app: App) => {
    app.component(_IconSettingLaptop.name, _IconSettingLaptop);
  }
});

export default IconSettingLaptop;