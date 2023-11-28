import type { App } from 'vue';
import _IconDoubleBed from './icon-double-bed.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDoubleBed.name = getComponentsPrefix() + _IconDoubleBed.name;

const IconDoubleBed = Object.assign(_IconDoubleBed, {
  install: (app: App) => {
    app.component(_IconDoubleBed.name, _IconDoubleBed);
  }
});

export default IconDoubleBed;