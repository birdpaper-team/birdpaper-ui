import type { App } from 'vue';
import _IconDownloadComputer from './icon-download-computer.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDownloadComputer.name = getComponentsPrefix() + _IconDownloadComputer.name;

const IconDownloadComputer = Object.assign(_IconDownloadComputer, {
  install: (app: App) => {
    app.component(_IconDownloadComputer.name, _IconDownloadComputer);
  }
});

export default IconDownloadComputer;