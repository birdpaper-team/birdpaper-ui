import type { App } from 'vue';
import _IconSettingWeb from './icon-setting-web.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSettingWeb.name = getComponentsPrefix() + _IconSettingWeb.name;

const IconSettingWeb = Object.assign(_IconSettingWeb, {
  install: (app: App) => {
    app.component(_IconSettingWeb.name, _IconSettingWeb);
  }
});

export default IconSettingWeb;