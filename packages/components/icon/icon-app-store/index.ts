import type { App } from 'vue';
import _IconAppStore from './icon-app-store.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAppStore.name = getComponentsPrefix() + _IconAppStore.name;

const IconAppStore = Object.assign(_IconAppStore, {
  install: (app: App) => {
    app.component(_IconAppStore.name, _IconAppStore);
  }
});

export default IconAppStore;