import type { App } from 'vue';
import _IconFilePdfOne from './icon-file-pdf-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFilePdfOne.name = getComponentsPrefix() + _IconFilePdfOne.name;

const IconFilePdfOne = Object.assign(_IconFilePdfOne, {
  install: (app: App) => {
    app.component(_IconFilePdfOne.name, _IconFilePdfOne);
  }
});

export default IconFilePdfOne;