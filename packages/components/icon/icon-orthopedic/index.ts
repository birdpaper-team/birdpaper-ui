import type { App } from 'vue';
import _IconOrthopedic from './icon-orthopedic.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconOrthopedic.name = getComponentsPrefix() + _IconOrthopedic.name;

const IconOrthopedic = Object.assign(_IconOrthopedic, {
  install: (app: App) => {
    app.component(_IconOrthopedic.name, _IconOrthopedic);
  }
});

export default IconOrthopedic;