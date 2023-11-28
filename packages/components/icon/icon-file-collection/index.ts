import type { App } from 'vue';
import _IconFileCollection from './icon-file-collection.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileCollection.name = getComponentsPrefix() + _IconFileCollection.name;

const IconFileCollection = Object.assign(_IconFileCollection, {
  install: (app: App) => {
    app.component(_IconFileCollection.name, _IconFileCollection);
  }
});

export default IconFileCollection;