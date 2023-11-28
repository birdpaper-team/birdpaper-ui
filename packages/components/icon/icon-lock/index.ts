import type { App } from 'vue';
import _IconLock from './icon-lock.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLock.name = getComponentsPrefix() + _IconLock.name;

const IconLock = Object.assign(_IconLock, {
  install: (app: App) => {
    app.component(_IconLock.name, _IconLock);
  }
});

export default IconLock;