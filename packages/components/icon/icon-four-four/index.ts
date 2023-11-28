import type { App } from 'vue';
import _IconFourFour from './icon-four-four.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFourFour.name = getComponentsPrefix() + _IconFourFour.name;

const IconFourFour = Object.assign(_IconFourFour, {
  install: (app: App) => {
    app.component(_IconFourFour.name, _IconFourFour);
  }
});

export default IconFourFour;