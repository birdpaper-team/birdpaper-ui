import type { App } from 'vue';
import _IconLockOne from './icon-lock-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLockOne.name = getComponentsPrefix() + _IconLockOne.name;

const IconLockOne = Object.assign(_IconLockOne, {
  install: (app: App) => {
    app.component(_IconLockOne.name, _IconLockOne);
  }
});

export default IconLockOne;