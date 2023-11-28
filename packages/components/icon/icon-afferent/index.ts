import type { App } from 'vue';
import _IconAfferent from './icon-afferent.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAfferent.name = getComponentsPrefix() + _IconAfferent.name;

const IconAfferent = Object.assign(_IconAfferent, {
  install: (app: App) => {
    app.component(_IconAfferent.name, _IconAfferent);
  }
});

export default IconAfferent;