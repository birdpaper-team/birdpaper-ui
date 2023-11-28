import type { App } from 'vue';
import _IconLockingLaptop from './icon-locking-laptop.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLockingLaptop.name = getComponentsPrefix() + _IconLockingLaptop.name;

const IconLockingLaptop = Object.assign(_IconLockingLaptop, {
  install: (app: App) => {
    app.component(_IconLockingLaptop.name, _IconLockingLaptop);
  }
});

export default IconLockingLaptop;