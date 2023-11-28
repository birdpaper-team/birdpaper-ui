import type { App } from 'vue';
import _IconUploadWeb from './icon-upload-web.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconUploadWeb.name = getComponentsPrefix() + _IconUploadWeb.name;

const IconUploadWeb = Object.assign(_IconUploadWeb, {
  install: (app: App) => {
    app.component(_IconUploadWeb.name, _IconUploadWeb);
  }
});

export default IconUploadWeb;