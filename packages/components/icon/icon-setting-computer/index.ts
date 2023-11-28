import type { App } from 'vue';
import _IconSettingComputer from './icon-setting-computer.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSettingComputer.name = getComponentsPrefix() + _IconSettingComputer.name;

const IconSettingComputer = Object.assign(_IconSettingComputer, {
  install: (app: App) => {
    app.component(_IconSettingComputer.name, _IconSettingComputer);
  }
});

export default IconSettingComputer;