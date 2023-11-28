import type { App } from 'vue';
import _IconFileSettings from './icon-file-settings.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileSettings.name = getComponentsPrefix() + _IconFileSettings.name;

const IconFileSettings = Object.assign(_IconFileSettings, {
  install: (app: App) => {
    app.component(_IconFileSettings.name, _IconFileSettings);
  }
});

export default IconFileSettings;