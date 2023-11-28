import type { App } from 'vue';
import _IconUploadThree from './icon-upload-three.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconUploadThree.name = getComponentsPrefix() + _IconUploadThree.name;

const IconUploadThree = Object.assign(_IconUploadThree, {
  install: (app: App) => {
    app.component(_IconUploadThree.name, _IconUploadThree);
  }
});

export default IconUploadThree;