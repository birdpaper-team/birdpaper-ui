import type { App } from 'vue';
import _IconFilePdf from './icon-file-pdf.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFilePdf.name = getComponentsPrefix() + _IconFilePdf.name;

const IconFilePdf = Object.assign(_IconFilePdf, {
  install: (app: App) => {
    app.component(_IconFilePdf.name, _IconFilePdf);
  }
});

export default IconFilePdf;