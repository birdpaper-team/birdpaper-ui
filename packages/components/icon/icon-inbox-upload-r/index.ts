import type { App } from 'vue';
import _IconInboxUploadR from './icon-inbox-upload-r.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconInboxUploadR.name = getComponentsPrefix() + _IconInboxUploadR.name;

const IconInboxUploadR = Object.assign(_IconInboxUploadR, {
  install: (app: App) => {
    app.component(_IconInboxUploadR.name, _IconInboxUploadR);
  }
});

export default IconInboxUploadR;