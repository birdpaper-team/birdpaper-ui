import type { App } from 'vue';
import _IconSpanner from './icon-spanner.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSpanner.name = getComponentsPrefix() + _IconSpanner.name;

const IconSpanner = Object.assign(_IconSpanner, {
  install: (app: App) => {
    app.component(_IconSpanner.name, _IconSpanner);
  }
});

export default IconSpanner;