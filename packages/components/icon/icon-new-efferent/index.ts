import type { App } from 'vue';
import _IconNewEfferent from './icon-new-efferent.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconNewEfferent.name = getComponentsPrefix() + _IconNewEfferent.name;

const IconNewEfferent = Object.assign(_IconNewEfferent, {
  install: (app: App) => {
    app.component(_IconNewEfferent.name, _IconNewEfferent);
  }
});

export default IconNewEfferent;