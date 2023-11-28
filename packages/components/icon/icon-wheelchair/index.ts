import type { App } from 'vue';
import _IconWheelchair from './icon-wheelchair.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWheelchair.name = getComponentsPrefix() + _IconWheelchair.name;

const IconWheelchair = Object.assign(_IconWheelchair, {
  install: (app: App) => {
    app.component(_IconWheelchair.name, _IconWheelchair);
  }
});

export default IconWheelchair;