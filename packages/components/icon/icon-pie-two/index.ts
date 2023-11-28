import type { App } from 'vue';
import _IconPieTwo from './icon-pie-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPieTwo.name = getComponentsPrefix() + _IconPieTwo.name;

const IconPieTwo = Object.assign(_IconPieTwo, {
  install: (app: App) => {
    app.component(_IconPieTwo.name, _IconPieTwo);
  }
});

export default IconPieTwo;