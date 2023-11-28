import type { App } from 'vue';
import _IconInboxDownloadR from './icon-inbox-download-r.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconInboxDownloadR.name = getComponentsPrefix() + _IconInboxDownloadR.name;

const IconInboxDownloadR = Object.assign(_IconInboxDownloadR, {
  install: (app: App) => {
    app.component(_IconInboxDownloadR.name, _IconInboxDownloadR);
  }
});

export default IconInboxDownloadR;