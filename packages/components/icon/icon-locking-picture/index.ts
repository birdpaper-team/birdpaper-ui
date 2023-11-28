import type { App } from 'vue';
import _IconLockingPicture from './icon-locking-picture.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLockingPicture.name = getComponentsPrefix() + _IconLockingPicture.name;

const IconLockingPicture = Object.assign(_IconLockingPicture, {
  install: (app: App) => {
    app.component(_IconLockingPicture.name, _IconLockingPicture);
  }
});

export default IconLockingPicture;