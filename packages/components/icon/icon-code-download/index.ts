import type { App } from 'vue';
import _IconCodeDownload from './icon-code-download.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCodeDownload.name = getComponentsPrefix() + _IconCodeDownload.name;

const IconCodeDownload = Object.assign(_IconCodeDownload, {
  install: (app: App) => {
    app.component(_IconCodeDownload.name, _IconCodeDownload);
  }
});

export default IconCodeDownload;