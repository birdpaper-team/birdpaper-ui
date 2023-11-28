import type { App } from 'vue';
import _IconElectronicLocksClose from './icon-electronic-locks-close.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconElectronicLocksClose.name = getComponentsPrefix() + _IconElectronicLocksClose.name;

const IconElectronicLocksClose = Object.assign(_IconElectronicLocksClose, {
  install: (app: App) => {
    app.component(_IconElectronicLocksClose.name, _IconElectronicLocksClose);
  }
});

export default IconElectronicLocksClose;