import type { App } from 'vue';
import _IconWatchOne from './icon-watch-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWatchOne.name = getComponentsPrefix() + _IconWatchOne.name;

const IconWatchOne = Object.assign(_IconWatchOne, {
  install: (app: App) => {
    app.component(_IconWatchOne.name, _IconWatchOne);
  }
});

export default IconWatchOne;