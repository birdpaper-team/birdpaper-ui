import type { App } from 'vue';
import _IconDownload from './icon-download.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDownload.name = getComponentsPrefix() + _IconDownload.name;

const IconDownload = Object.assign(_IconDownload, {
  install: (app: App) => {
    app.component(_IconDownload.name, _IconDownload);
  }
});

export default IconDownload;