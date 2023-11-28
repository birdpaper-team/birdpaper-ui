import type { App } from 'vue';
import _IconUploadPicture from './icon-upload-picture.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconUploadPicture.name = getComponentsPrefix() + _IconUploadPicture.name;

const IconUploadPicture = Object.assign(_IconUploadPicture, {
  install: (app: App) => {
    app.component(_IconUploadPicture.name, _IconUploadPicture);
  }
});

export default IconUploadPicture;