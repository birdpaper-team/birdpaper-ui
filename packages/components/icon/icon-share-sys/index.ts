import type { App } from 'vue';
import _IconShareSys from './icon-share-sys.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconShareSys.name = getComponentsPrefix() + _IconShareSys.name;

const IconShareSys = Object.assign(_IconShareSys, {
  install: (app: App) => {
    app.component(_IconShareSys.name, _IconShareSys);
  }
});

export default IconShareSys;