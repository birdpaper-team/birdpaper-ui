import type { App } from 'vue';
import _IconUploadTwo from './icon-upload-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconUploadTwo.name = getComponentsPrefix() + _IconUploadTwo.name;

const IconUploadTwo = Object.assign(_IconUploadTwo, {
  install: (app: App) => {
    app.component(_IconUploadTwo.name, _IconUploadTwo);
  }
});

export default IconUploadTwo;