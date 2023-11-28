import type { App } from 'vue';
import _IconElectronicLocksOpen from './icon-electronic-locks-open.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconElectronicLocksOpen.name = getComponentsPrefix() + _IconElectronicLocksOpen.name;

const IconElectronicLocksOpen = Object.assign(_IconElectronicLocksOpen, {
  install: (app: App) => {
    app.component(_IconElectronicLocksOpen.name, _IconElectronicLocksOpen);
  }
});

export default IconElectronicLocksOpen;