import type { App } from 'vue';
import _IconBlockSix from './icon-block-six.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBlockSix.name = getComponentsPrefix() + _IconBlockSix.name;

const IconBlockSix = Object.assign(_IconBlockSix, {
  install: (app: App) => {
    app.component(_IconBlockSix.name, _IconBlockSix);
  }
});

export default IconBlockSix;