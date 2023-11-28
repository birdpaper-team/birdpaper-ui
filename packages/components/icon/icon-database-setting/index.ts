import type { App } from 'vue';
import _IconDatabaseSetting from './icon-database-setting.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDatabaseSetting.name = getComponentsPrefix() + _IconDatabaseSetting.name;

const IconDatabaseSetting = Object.assign(_IconDatabaseSetting, {
  install: (app: App) => {
    app.component(_IconDatabaseSetting.name, _IconDatabaseSetting);
  }
});

export default IconDatabaseSetting;