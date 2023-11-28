import type { App } from 'vue';
import _IconFileCollectionOne from './icon-file-collection-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileCollectionOne.name = getComponentsPrefix() + _IconFileCollectionOne.name;

const IconFileCollectionOne = Object.assign(_IconFileCollectionOne, {
  install: (app: App) => {
    app.component(_IconFileCollectionOne.name, _IconFileCollectionOne);
  }
});

export default IconFileCollectionOne;