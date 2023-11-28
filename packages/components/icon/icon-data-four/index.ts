import type { App } from 'vue';
import _IconDataFour from './icon-data-four.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDataFour.name = getComponentsPrefix() + _IconDataFour.name;

const IconDataFour = Object.assign(_IconDataFour, {
  install: (app: App) => {
    app.component(_IconDataFour.name, _IconDataFour);
  }
});

export default IconDataFour;