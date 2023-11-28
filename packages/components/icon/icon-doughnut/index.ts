import type { App } from 'vue';
import _IconDoughnut from './icon-doughnut.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDoughnut.name = getComponentsPrefix() + _IconDoughnut.name;

const IconDoughnut = Object.assign(_IconDoughnut, {
  install: (app: App) => {
    app.component(_IconDoughnut.name, _IconDoughnut);
  }
});

export default IconDoughnut;