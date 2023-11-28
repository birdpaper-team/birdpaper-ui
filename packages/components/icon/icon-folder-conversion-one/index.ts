import type { App } from 'vue';
import _IconFolderConversionOne from './icon-folder-conversion-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFolderConversionOne.name = getComponentsPrefix() + _IconFolderConversionOne.name;

const IconFolderConversionOne = Object.assign(_IconFolderConversionOne, {
  install: (app: App) => {
    app.component(_IconFolderConversionOne.name, _IconFolderConversionOne);
  }
});

export default IconFolderConversionOne;