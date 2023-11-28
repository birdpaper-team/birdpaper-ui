import type { App } from 'vue';
import _IconFolderSettings from './icon-folder-settings.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFolderSettings.name = getComponentsPrefix() + _IconFolderSettings.name;

const IconFolderSettings = Object.assign(_IconFolderSettings, {
  install: (app: App) => {
    app.component(_IconFolderSettings.name, _IconFolderSettings);
  }
});

export default IconFolderSettings;