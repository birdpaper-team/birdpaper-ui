import type { App } from 'vue';
import _IconStopwatch from './icon-stopwatch.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconStopwatch.name = getComponentsPrefix() + _IconStopwatch.name;

const IconStopwatch = Object.assign(_IconStopwatch, {
  install: (app: App) => {
    app.component(_IconStopwatch.name, _IconStopwatch);
  }
});

export default IconStopwatch;