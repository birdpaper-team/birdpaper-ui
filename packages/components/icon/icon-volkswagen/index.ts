import type { App } from 'vue';
import _IconVolkswagen from './icon-volkswagen.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconVolkswagen.name = getComponentsPrefix() + _IconVolkswagen.name;

const IconVolkswagen = Object.assign(_IconVolkswagen, {
  install: (app: App) => {
    app.component(_IconVolkswagen.name, _IconVolkswagen);
  }
});

export default IconVolkswagen;