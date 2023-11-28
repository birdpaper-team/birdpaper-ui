import type { App } from 'vue';
import _IconPerfumerBottle from './icon-perfumer-bottle.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPerfumerBottle.name = getComponentsPrefix() + _IconPerfumerBottle.name;

const IconPerfumerBottle = Object.assign(_IconPerfumerBottle, {
  install: (app: App) => {
    app.component(_IconPerfumerBottle.name, _IconPerfumerBottle);
  }
});

export default IconPerfumerBottle;