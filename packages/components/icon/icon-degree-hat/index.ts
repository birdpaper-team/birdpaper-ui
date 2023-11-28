import type { App } from 'vue';
import _IconDegreeHat from './icon-degree-hat.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDegreeHat.name = getComponentsPrefix() + _IconDegreeHat.name;

const IconDegreeHat = Object.assign(_IconDegreeHat, {
  install: (app: App) => {
    app.component(_IconDegreeHat.name, _IconDegreeHat);
  }
});

export default IconDegreeHat;