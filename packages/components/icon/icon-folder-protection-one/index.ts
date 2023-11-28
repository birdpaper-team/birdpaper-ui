import type { App } from 'vue';
import _IconFolderProtectionOne from './icon-folder-protection-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFolderProtectionOne.name = getComponentsPrefix() + _IconFolderProtectionOne.name;

const IconFolderProtectionOne = Object.assign(_IconFolderProtectionOne, {
  install: (app: App) => {
    app.component(_IconFolderProtectionOne.name, _IconFolderProtectionOne);
  }
});

export default IconFolderProtectionOne;