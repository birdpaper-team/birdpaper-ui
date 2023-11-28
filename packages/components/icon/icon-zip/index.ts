import type { App } from 'vue';
import _IconZip from './icon-zip.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconZip.name = getComponentsPrefix() + _IconZip.name;

const IconZip = Object.assign(_IconZip, {
  install: (app: App) => {
    app.component(_IconZip.name, _IconZip);
  }
});

export default IconZip;