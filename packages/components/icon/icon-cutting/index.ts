import type { App } from 'vue';
import _IconCutting from './icon-cutting.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCutting.name = getComponentsPrefix() + _IconCutting.name;

const IconCutting = Object.assign(_IconCutting, {
  install: (app: App) => {
    app.component(_IconCutting.name, _IconCutting);
  }
});

export default IconCutting;