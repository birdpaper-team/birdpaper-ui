import type { App } from 'vue';
import _IconFileConversion from './icon-file-conversion.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileConversion.name = getComponentsPrefix() + _IconFileConversion.name;

const IconFileConversion = Object.assign(_IconFileConversion, {
  install: (app: App) => {
    app.component(_IconFileConversion.name, _IconFileConversion);
  }
});

export default IconFileConversion;