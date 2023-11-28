import type { App } from 'vue';
import _IconAverage from './icon-average.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAverage.name = getComponentsPrefix() + _IconAverage.name;

const IconAverage = Object.assign(_IconAverage, {
  install: (app: App) => {
    app.component(_IconAverage.name, _IconAverage);
  }
});

export default IconAverage;