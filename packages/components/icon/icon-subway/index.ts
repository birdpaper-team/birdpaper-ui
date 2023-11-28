import type { App } from 'vue';
import _IconSubway from './icon-subway.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSubway.name = getComponentsPrefix() + _IconSubway.name;

const IconSubway = Object.assign(_IconSubway, {
  install: (app: App) => {
    app.component(_IconSubway.name, _IconSubway);
  }
});

export default IconSubway;