import type { App } from 'vue';
import _IconScanning from './icon-scanning.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconScanning.name = getComponentsPrefix() + _IconScanning.name;

const IconScanning = Object.assign(_IconScanning, {
  install: (app: App) => {
    app.component(_IconScanning.name, _IconScanning);
  }
});

export default IconScanning;