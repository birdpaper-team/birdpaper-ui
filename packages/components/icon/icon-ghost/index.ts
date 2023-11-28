import type { App } from 'vue';
import _IconGhost from './icon-ghost.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGhost.name = getComponentsPrefix() + _IconGhost.name;

const IconGhost = Object.assign(_IconGhost, {
  install: (app: App) => {
    app.component(_IconGhost.name, _IconGhost);
  }
});

export default IconGhost;