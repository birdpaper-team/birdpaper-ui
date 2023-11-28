import type { App } from 'vue';
import _IconUDisk from './icon-u-disk.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconUDisk.name = getComponentsPrefix() + _IconUDisk.name;

const IconUDisk = Object.assign(_IconUDisk, {
  install: (app: App) => {
    app.component(_IconUDisk.name, _IconUDisk);
  }
});

export default IconUDisk;