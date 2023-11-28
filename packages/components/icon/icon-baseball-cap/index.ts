import type { App } from 'vue';
import _IconBaseballCap from './icon-baseball-cap.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBaseballCap.name = getComponentsPrefix() + _IconBaseballCap.name;

const IconBaseballCap = Object.assign(_IconBaseballCap, {
  install: (app: App) => {
    app.component(_IconBaseballCap.name, _IconBaseballCap);
  }
});

export default IconBaseballCap;