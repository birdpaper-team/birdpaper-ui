import type { App } from 'vue';
import _IconDownloadTwo from './icon-download-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDownloadTwo.name = getComponentsPrefix() + _IconDownloadTwo.name;

const IconDownloadTwo = Object.assign(_IconDownloadTwo, {
  install: (app: App) => {
    app.component(_IconDownloadTwo.name, _IconDownloadTwo);
  }
});

export default IconDownloadTwo;