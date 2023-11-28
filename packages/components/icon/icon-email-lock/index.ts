import type { App } from 'vue';
import _IconEmailLock from './icon-email-lock.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEmailLock.name = getComponentsPrefix() + _IconEmailLock.name;

const IconEmailLock = Object.assign(_IconEmailLock, {
  install: (app: App) => {
    app.component(_IconEmailLock.name, _IconEmailLock);
  }
});

export default IconEmailLock;