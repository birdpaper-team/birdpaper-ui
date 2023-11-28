import type { App } from 'vue';
import _IconUploadOne from './icon-upload-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconUploadOne.name = getComponentsPrefix() + _IconUploadOne.name;

const IconUploadOne = Object.assign(_IconUploadOne, {
  install: (app: App) => {
    app.component(_IconUploadOne.name, _IconUploadOne);
  }
});

export default IconUploadOne;