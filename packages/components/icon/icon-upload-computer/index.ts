import type { App } from 'vue';
import _IconUploadComputer from './icon-upload-computer.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconUploadComputer.name = getComponentsPrefix() + _IconUploadComputer.name;

const IconUploadComputer = Object.assign(_IconUploadComputer, {
  install: (app: App) => {
    app.component(_IconUploadComputer.name, _IconUploadComputer);
  }
});

export default IconUploadComputer;