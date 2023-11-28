import type { App } from 'vue';
import _IconBlockNine from './icon-block-nine.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBlockNine.name = getComponentsPrefix() + _IconBlockNine.name;

const IconBlockNine = Object.assign(_IconBlockNine, {
  install: (app: App) => {
    app.component(_IconBlockNine.name, _IconBlockNine);
  }
});

export default IconBlockNine;