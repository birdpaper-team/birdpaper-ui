import type { App } from 'vue';
import _IconFolderFailedOne from './icon-folder-failed-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFolderFailedOne.name = getComponentsPrefix() + _IconFolderFailedOne.name;

const IconFolderFailedOne = Object.assign(_IconFolderFailedOne, {
  install: (app: App) => {
    app.component(_IconFolderFailedOne.name, _IconFolderFailedOne);
  }
});

export default IconFolderFailedOne;