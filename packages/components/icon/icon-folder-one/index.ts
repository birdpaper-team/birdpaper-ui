import type { App } from 'vue';
import _IconFolderOne from './icon-folder-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFolderOne.name = getComponentsPrefix() + _IconFolderOne.name;

const IconFolderOne = Object.assign(_IconFolderOne, {
  install: (app: App) => {
    app.component(_IconFolderOne.name, _IconFolderOne);
  }
});

export default IconFolderOne;