import type { App } from 'vue';
import _IconFileLock from './icon-file-lock.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileLock.name = getComponentsPrefix() + _IconFileLock.name;

const IconFileLock = Object.assign(_IconFileLock, {
  install: (app: App) => {
    app.component(_IconFileLock.name, _IconFileLock);
  }
});

export default IconFileLock;