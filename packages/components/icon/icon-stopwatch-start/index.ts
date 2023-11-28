import type { App } from 'vue';
import _IconStopwatchStart from './icon-stopwatch-start.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconStopwatchStart.name = getComponentsPrefix() + _IconStopwatchStart.name;

const IconStopwatchStart = Object.assign(_IconStopwatchStart, {
  install: (app: App) => {
    app.component(_IconStopwatchStart.name, _IconStopwatchStart);
  }
});

export default IconStopwatchStart;