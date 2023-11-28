import type { App } from 'vue';
import _IconWorld from './icon-world.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWorld.name = getComponentsPrefix() + _IconWorld.name;

const IconWorld = Object.assign(_IconWorld, {
  install: (app: App) => {
    app.component(_IconWorld.name, _IconWorld);
  }
});

export default IconWorld;