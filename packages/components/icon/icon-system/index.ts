import type { App } from 'vue';
import _IconSystem from './icon-system.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSystem.name = getComponentsPrefix() + _IconSystem.name;

const IconSystem = Object.assign(_IconSystem, {
  install: (app: App) => {
    app.component(_IconSystem.name, _IconSystem);
  }
});

export default IconSystem;