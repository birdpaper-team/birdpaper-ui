import type { App } from 'vue';
import _IconDisk from './icon-disk.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDisk.name = getComponentsPrefix() + _IconDisk.name;

const IconDisk = Object.assign(_IconDisk, {
  install: (app: App) => {
    app.component(_IconDisk.name, _IconDisk);
  }
});

export default IconDisk;