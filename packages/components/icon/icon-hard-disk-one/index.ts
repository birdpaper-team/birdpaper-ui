import type { App } from 'vue';
import _IconHardDiskOne from './icon-hard-disk-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHardDiskOne.name = getComponentsPrefix() + _IconHardDiskOne.name;

const IconHardDiskOne = Object.assign(_IconHardDiskOne, {
  install: (app: App) => {
    app.component(_IconHardDiskOne.name, _IconHardDiskOne);
  }
});

export default IconHardDiskOne;