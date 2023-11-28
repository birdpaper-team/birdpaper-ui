import type { App } from 'vue';
import _IconDiskTwo from './icon-disk-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDiskTwo.name = getComponentsPrefix() + _IconDiskTwo.name;

const IconDiskTwo = Object.assign(_IconDiskTwo, {
  install: (app: App) => {
    app.component(_IconDiskTwo.name, _IconDiskTwo);
  }
});

export default IconDiskTwo;