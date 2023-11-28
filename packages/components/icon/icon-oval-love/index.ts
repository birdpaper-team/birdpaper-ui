import type { App } from 'vue';
import _IconOvalLove from './icon-oval-love.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconOvalLove.name = getComponentsPrefix() + _IconOvalLove.name;

const IconOvalLove = Object.assign(_IconOvalLove, {
  install: (app: App) => {
    app.component(_IconOvalLove.name, _IconOvalLove);
  }
});

export default IconOvalLove;