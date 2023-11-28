import type { App } from 'vue';
import _IconNoodles from './icon-noodles.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconNoodles.name = getComponentsPrefix() + _IconNoodles.name;

const IconNoodles = Object.assign(_IconNoodles, {
  install: (app: App) => {
    app.component(_IconNoodles.name, _IconNoodles);
  }
});

export default IconNoodles;