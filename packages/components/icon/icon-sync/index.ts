import type { App } from 'vue';
import _IconSync from './icon-sync.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSync.name = getComponentsPrefix() + _IconSync.name;

const IconSync = Object.assign(_IconSync, {
  install: (app: App) => {
    app.component(_IconSync.name, _IconSync);
  }
});

export default IconSync;