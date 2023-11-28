import type { App } from 'vue';
import _IconScanningTwo from './icon-scanning-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconScanningTwo.name = getComponentsPrefix() + _IconScanningTwo.name;

const IconScanningTwo = Object.assign(_IconScanningTwo, {
  install: (app: App) => {
    app.component(_IconScanningTwo.name, _IconScanningTwo);
  }
});

export default IconScanningTwo;