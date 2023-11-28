import type { App } from 'vue';
import _IconRadarTwo from './icon-radar-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRadarTwo.name = getComponentsPrefix() + _IconRadarTwo.name;

const IconRadarTwo = Object.assign(_IconRadarTwo, {
  install: (app: App) => {
    app.component(_IconRadarTwo.name, _IconRadarTwo);
  }
});

export default IconRadarTwo;