import type { App } from 'vue';
import _IconMailDownload from './icon-mail-download.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMailDownload.name = getComponentsPrefix() + _IconMailDownload.name;

const IconMailDownload = Object.assign(_IconMailDownload, {
  install: (app: App) => {
    app.component(_IconMailDownload.name, _IconMailDownload);
  }
});

export default IconMailDownload;