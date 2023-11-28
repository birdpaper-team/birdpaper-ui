import type { App } from 'vue';
import _IconFolderSettingsOne from './icon-folder-settings-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFolderSettingsOne.name = getComponentsPrefix() + _IconFolderSettingsOne.name;

const IconFolderSettingsOne = Object.assign(_IconFolderSettingsOne, {
  install: (app: App) => {
    app.component(_IconFolderSettingsOne.name, _IconFolderSettingsOne);
  }
});

export default IconFolderSettingsOne;