import type { App } from 'vue';
import _IconCollectionRecords from './icon-collection-records.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCollectionRecords.name = getComponentsPrefix() + _IconCollectionRecords.name;

const IconCollectionRecords = Object.assign(_IconCollectionRecords, {
  install: (app: App) => {
    app.component(_IconCollectionRecords.name, _IconCollectionRecords);
  }
});

export default IconCollectionRecords;