import type { App } from 'vue';
import _IconStar from './icon-star.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconStar.name = getComponentsPrefix() + _IconStar.name;

const IconStar = Object.assign(_IconStar, {
  install: (app: App) => {
    app.component(_IconStar.name, _IconStar);
  }
});

export default IconStar;