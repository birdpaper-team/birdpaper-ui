import type { App } from 'vue';
import _IconUploadLogs from './icon-upload-logs.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconUploadLogs.name = getComponentsPrefix() + _IconUploadLogs.name;

const IconUploadLogs = Object.assign(_IconUploadLogs, {
  install: (app: App) => {
    app.component(_IconUploadLogs.name, _IconUploadLogs);
  }
});

export default IconUploadLogs;