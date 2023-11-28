import type { App } from 'vue';
import _IconNewspaperFolding from './icon-newspaper-folding.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconNewspaperFolding.name = getComponentsPrefix() + _IconNewspaperFolding.name;

const IconNewspaperFolding = Object.assign(_IconNewspaperFolding, {
  install: (app: App) => {
    app.component(_IconNewspaperFolding.name, _IconNewspaperFolding);
  }
});

export default IconNewspaperFolding;