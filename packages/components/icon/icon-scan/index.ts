import type { App } from 'vue';
import _IconScan from './icon-scan.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconScan.name = getComponentsPrefix() + _IconScan.name;

const IconScan = Object.assign(_IconScan, {
  install: (app: App) => {
    app.component(_IconScan.name, _IconScan);
  }
});

export default IconScan;