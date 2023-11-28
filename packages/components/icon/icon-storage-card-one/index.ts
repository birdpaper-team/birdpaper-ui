import type { App } from 'vue';
import _IconStorageCardOne from './icon-storage-card-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconStorageCardOne.name = getComponentsPrefix() + _IconStorageCardOne.name;

const IconStorageCardOne = Object.assign(_IconStorageCardOne, {
  install: (app: App) => {
    app.component(_IconStorageCardOne.name, _IconStorageCardOne);
  }
});

export default IconStorageCardOne;