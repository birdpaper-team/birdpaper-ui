import type { App } from 'vue';
import _IconCreative from './icon-creative.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCreative.name = getComponentsPrefix() + _IconCreative.name;

const IconCreative = Object.assign(_IconCreative, {
  install: (app: App) => {
    app.component(_IconCreative.name, _IconCreative);
  }
});

export default IconCreative;