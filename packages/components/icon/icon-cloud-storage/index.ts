import type { App } from 'vue';
import _IconCloudStorage from './icon-cloud-storage.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCloudStorage.name = getComponentsPrefix() + _IconCloudStorage.name;

const IconCloudStorage = Object.assign(_IconCloudStorage, {
  install: (app: App) => {
    app.component(_IconCloudStorage.name, _IconCloudStorage);
  }
});

export default IconCloudStorage;