import type { App } from 'vue';
import _IconOctagon from './icon-octagon.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconOctagon.name = getComponentsPrefix() + _IconOctagon.name;

const IconOctagon = Object.assign(_IconOctagon, {
  install: (app: App) => {
    app.component(_IconOctagon.name, _IconOctagon);
  }
});

export default IconOctagon;