import type { App } from 'vue';
import _IconLeaves from './icon-leaves.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLeaves.name = getComponentsPrefix() + _IconLeaves.name;

const IconLeaves = Object.assign(_IconLeaves, {
  install: (app: App) => {
    app.component(_IconLeaves.name, _IconLeaves);
  }
});

export default IconLeaves;