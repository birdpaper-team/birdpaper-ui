import type { App } from 'vue';
import _IconDiskOne from './icon-disk-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDiskOne.name = getComponentsPrefix() + _IconDiskOne.name;

const IconDiskOne = Object.assign(_IconDiskOne, {
  install: (app: App) => {
    app.component(_IconDiskOne.name, _IconDiskOne);
  }
});

export default IconDiskOne;