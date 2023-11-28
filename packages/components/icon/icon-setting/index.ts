import type { App } from 'vue';
import _IconSetting from './icon-setting.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSetting.name = getComponentsPrefix() + _IconSetting.name;

const IconSetting = Object.assign(_IconSetting, {
  install: (app: App) => {
    app.component(_IconSetting.name, _IconSetting);
  }
});

export default IconSetting;