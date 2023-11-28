import type { App } from 'vue';
import _IconCollectionFiles from './icon-collection-files.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCollectionFiles.name = getComponentsPrefix() + _IconCollectionFiles.name;

const IconCollectionFiles = Object.assign(_IconCollectionFiles, {
  install: (app: App) => {
    app.component(_IconCollectionFiles.name, _IconCollectionFiles);
  }
});

export default IconCollectionFiles;