import type { App } from 'vue';
import _IconIwatch from './icon-iwatch.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconIwatch.name = getComponentsPrefix() + _IconIwatch.name;

const IconIwatch = Object.assign(_IconIwatch, {
  install: (app: App) => {
    app.component(_IconIwatch.name, _IconIwatch);
  }
});

export default IconIwatch;