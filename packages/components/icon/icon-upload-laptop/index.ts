import type { App } from 'vue';
import _IconUploadLaptop from './icon-upload-laptop.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconUploadLaptop.name = getComponentsPrefix() + _IconUploadLaptop.name;

const IconUploadLaptop = Object.assign(_IconUploadLaptop, {
  install: (app: App) => {
    app.component(_IconUploadLaptop.name, _IconUploadLaptop);
  }
});

export default IconUploadLaptop;