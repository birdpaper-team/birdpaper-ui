import type { App } from 'vue';
import _IconSpinningTop from './icon-spinning-top.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSpinningTop.name = getComponentsPrefix() + _IconSpinningTop.name;

const IconSpinningTop = Object.assign(_IconSpinningTop, {
  install: (app: App) => {
    app.component(_IconSpinningTop.name, _IconSpinningTop);
  }
});

export default IconSpinningTop;