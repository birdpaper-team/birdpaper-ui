import type { App } from 'vue';
import _IconAnchor from './icon-anchor.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAnchor.name = getComponentsPrefix() + _IconAnchor.name;

const IconAnchor = Object.assign(_IconAnchor, {
  install: (app: App) => {
    app.component(_IconAnchor.name, _IconAnchor);
  }
});

export default IconAnchor;