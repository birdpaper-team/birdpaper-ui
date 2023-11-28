import type { App } from 'vue';
import _IconTrendingUp from './icon-trending-up.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTrendingUp.name = getComponentsPrefix() + _IconTrendingUp.name;

const IconTrendingUp = Object.assign(_IconTrendingUp, {
  install: (app: App) => {
    app.component(_IconTrendingUp.name, _IconTrendingUp);
  }
});

export default IconTrendingUp;