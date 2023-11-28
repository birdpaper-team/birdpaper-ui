import type { App } from 'vue';
import _IconFileRemoval from './icon-file-removal.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileRemoval.name = getComponentsPrefix() + _IconFileRemoval.name;

const IconFileRemoval = Object.assign(_IconFileRemoval, {
  install: (app: App) => {
    app.component(_IconFileRemoval.name, _IconFileRemoval);
  }
});

export default IconFileRemoval;