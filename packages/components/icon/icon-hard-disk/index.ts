import type { App } from 'vue';
import _IconHardDisk from './icon-hard-disk.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHardDisk.name = getComponentsPrefix() + _IconHardDisk.name;

const IconHardDisk = Object.assign(_IconHardDisk, {
  install: (app: App) => {
    app.component(_IconHardDisk.name, _IconHardDisk);
  }
});

export default IconHardDisk;