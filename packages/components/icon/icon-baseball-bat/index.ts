import type { App } from 'vue';
import _IconBaseballBat from './icon-baseball-bat.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBaseballBat.name = getComponentsPrefix() + _IconBaseballBat.name;

const IconBaseballBat = Object.assign(_IconBaseballBat, {
  install: (app: App) => {
    app.component(_IconBaseballBat.name, _IconBaseballBat);
  }
});

export default IconBaseballBat;