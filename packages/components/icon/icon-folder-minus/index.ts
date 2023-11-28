import type { App } from 'vue';
import _IconFolderMinus from './icon-folder-minus.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFolderMinus.name = getComponentsPrefix() + _IconFolderMinus.name;

const IconFolderMinus = Object.assign(_IconFolderMinus, {
  install: (app: App) => {
    app.component(_IconFolderMinus.name, _IconFolderMinus);
  }
});

export default IconFolderMinus;