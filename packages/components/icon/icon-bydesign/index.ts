import type { App } from 'vue';
import _IconBydesign from './icon-bydesign.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBydesign.name = getComponentsPrefix() + _IconBydesign.name;

const IconBydesign = Object.assign(_IconBydesign, {
  install: (app: App) => {
    app.component(_IconBydesign.name, _IconBydesign);
  }
});

export default IconBydesign;