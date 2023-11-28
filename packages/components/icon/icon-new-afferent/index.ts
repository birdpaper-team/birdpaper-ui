import type { App } from 'vue';
import _IconNewAfferent from './icon-new-afferent.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconNewAfferent.name = getComponentsPrefix() + _IconNewAfferent.name;

const IconNewAfferent = Object.assign(_IconNewAfferent, {
  install: (app: App) => {
    app.component(_IconNewAfferent.name, _IconNewAfferent);
  }
});

export default IconNewAfferent;