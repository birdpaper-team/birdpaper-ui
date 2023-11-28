import type { App } from 'vue';
import _IconReverseLens from './icon-reverse-lens.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconReverseLens.name = getComponentsPrefix() + _IconReverseLens.name;

const IconReverseLens = Object.assign(_IconReverseLens, {
  install: (app: App) => {
    app.component(_IconReverseLens.name, _IconReverseLens);
  }
});

export default IconReverseLens;