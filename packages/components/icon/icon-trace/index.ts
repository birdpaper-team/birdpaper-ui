import type { App } from 'vue';
import _IconTrace from './icon-trace.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTrace.name = getComponentsPrefix() + _IconTrace.name;

const IconTrace = Object.assign(_IconTrace, {
  install: (app: App) => {
    app.component(_IconTrace.name, _IconTrace);
  }
});

export default IconTrace;