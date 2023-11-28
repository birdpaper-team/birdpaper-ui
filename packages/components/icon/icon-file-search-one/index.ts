import type { App } from 'vue';
import _IconFileSearchOne from './icon-file-search-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileSearchOne.name = getComponentsPrefix() + _IconFileSearchOne.name;

const IconFileSearchOne = Object.assign(_IconFileSearchOne, {
  install: (app: App) => {
    app.component(_IconFileSearchOne.name, _IconFileSearchOne);
  }
});

export default IconFileSearchOne;