import type { App } from 'vue';
import _IconConditioner from './icon-conditioner.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconConditioner.name = getComponentsPrefix() + _IconConditioner.name;

const IconConditioner = Object.assign(_IconConditioner, {
  install: (app: App) => {
    app.component(_IconConditioner.name, _IconConditioner);
  }
});

export default IconConditioner;