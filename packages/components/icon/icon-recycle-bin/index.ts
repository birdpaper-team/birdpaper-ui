import type { App } from 'vue';
import _IconRecycleBin from './icon-recycle-bin.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRecycleBin.name = getComponentsPrefix() + _IconRecycleBin.name;

const IconRecycleBin = Object.assign(_IconRecycleBin, {
  install: (app: App) => {
    app.component(_IconRecycleBin.name, _IconRecycleBin);
  }
});

export default IconRecycleBin;