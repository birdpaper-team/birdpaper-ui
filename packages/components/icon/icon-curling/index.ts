import type { App } from 'vue';
import _IconCurling from './icon-curling.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCurling.name = getComponentsPrefix() + _IconCurling.name;

const IconCurling = Object.assign(_IconCurling, {
  install: (app: App) => {
    app.component(_IconCurling.name, _IconCurling);
  }
});

export default IconCurling;