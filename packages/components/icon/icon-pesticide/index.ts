import type { App } from 'vue';
import _IconPesticide from './icon-pesticide.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPesticide.name = getComponentsPrefix() + _IconPesticide.name;

const IconPesticide = Object.assign(_IconPesticide, {
  install: (app: App) => {
    app.component(_IconPesticide.name, _IconPesticide);
  }
});

export default IconPesticide;