import type { App } from 'vue';
import _IconStorageCardTwo from './icon-storage-card-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconStorageCardTwo.name = getComponentsPrefix() + _IconStorageCardTwo.name;

const IconStorageCardTwo = Object.assign(_IconStorageCardTwo, {
  install: (app: App) => {
    app.component(_IconStorageCardTwo.name, _IconStorageCardTwo);
  }
});

export default IconStorageCardTwo;