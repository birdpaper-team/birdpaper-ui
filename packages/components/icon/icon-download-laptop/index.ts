import type { App } from 'vue';
import _IconDownloadLaptop from './icon-download-laptop.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDownloadLaptop.name = getComponentsPrefix() + _IconDownloadLaptop.name;

const IconDownloadLaptop = Object.assign(_IconDownloadLaptop, {
  install: (app: App) => {
    app.component(_IconDownloadLaptop.name, _IconDownloadLaptop);
  }
});

export default IconDownloadLaptop;