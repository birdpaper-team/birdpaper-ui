import type { App } from 'vue';
import _IconWoman from './icon-woman.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWoman.name = getComponentsPrefix() + _IconWoman.name;

const IconWoman = Object.assign(_IconWoman, {
  install: (app: App) => {
    app.component(_IconWoman.name, _IconWoman);
  }
});

export default IconWoman;