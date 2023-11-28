import type { App } from 'vue';
import _IconDataLock from './icon-data-lock.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDataLock.name = getComponentsPrefix() + _IconDataLock.name;

const IconDataLock = Object.assign(_IconDataLock, {
  install: (app: App) => {
    app.component(_IconDataLock.name, _IconDataLock);
  }
});

export default IconDataLock;