import type { App } from 'vue';
import _IconCirclesSeven from './icon-circles-seven.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCirclesSeven.name = getComponentsPrefix() + _IconCirclesSeven.name;

const IconCirclesSeven = Object.assign(_IconCirclesSeven, {
  install: (app: App) => {
    app.component(_IconCirclesSeven.name, _IconCirclesSeven);
  }
});

export default IconCirclesSeven;