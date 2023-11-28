import type { App } from 'vue';
import _IconSettingConfig from './icon-setting-config.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSettingConfig.name = getComponentsPrefix() + _IconSettingConfig.name;

const IconSettingConfig = Object.assign(_IconSettingConfig, {
  install: (app: App) => {
    app.component(_IconSettingConfig.name, _IconSettingConfig);
  }
});

export default IconSettingConfig;