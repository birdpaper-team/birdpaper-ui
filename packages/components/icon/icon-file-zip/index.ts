import type { App } from 'vue';
import _IconFileZip from './icon-file-zip.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileZip.name = getComponentsPrefix() + _IconFileZip.name;

const IconFileZip = Object.assign(_IconFileZip, {
  install: (app: App) => {
    app.component(_IconFileZip.name, _IconFileZip);
  }
});

export default IconFileZip;