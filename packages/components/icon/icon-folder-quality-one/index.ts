import type { App } from 'vue';
import _IconFolderQualityOne from './icon-folder-quality-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFolderQualityOne.name = getComponentsPrefix() + _IconFolderQualityOne.name;

const IconFolderQualityOne = Object.assign(_IconFolderQualityOne, {
  install: (app: App) => {
    app.component(_IconFolderQualityOne.name, _IconFolderQualityOne);
  }
});

export default IconFolderQualityOne;