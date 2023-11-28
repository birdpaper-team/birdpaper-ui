import type { App } from 'vue';
import _IconPeas from './icon-peas.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPeas.name = getComponentsPrefix() + _IconPeas.name;

const IconPeas = Object.assign(_IconPeas, {
  install: (app: App) => {
    app.component(_IconPeas.name, _IconPeas);
  }
});

export default IconPeas;