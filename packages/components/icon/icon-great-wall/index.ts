import type { App } from 'vue';
import _IconGreatWall from './icon-great-wall.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGreatWall.name = getComponentsPrefix() + _IconGreatWall.name;

const IconGreatWall = Object.assign(_IconGreatWall, {
  install: (app: App) => {
    app.component(_IconGreatWall.name, _IconGreatWall);
  }
});

export default IconGreatWall;