import type { App } from 'vue';
import _IconKettle from './icon-kettle.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconKettle.name = getComponentsPrefix() + _IconKettle.name;

const IconKettle = Object.assign(_IconKettle, {
  install: (app: App) => {
    app.component(_IconKettle.name, _IconKettle);
  }
});

export default IconKettle;