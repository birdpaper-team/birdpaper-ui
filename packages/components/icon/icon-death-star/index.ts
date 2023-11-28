import type { App } from 'vue';
import _IconDeathStar from './icon-death-star.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDeathStar.name = getComponentsPrefix() + _IconDeathStar.name;

const IconDeathStar = Object.assign(_IconDeathStar, {
  install: (app: App) => {
    app.component(_IconDeathStar.name, _IconDeathStar);
  }
});

export default IconDeathStar;