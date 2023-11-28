import type { App } from 'vue';
import _IconMaster from './icon-master.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMaster.name = getComponentsPrefix() + _IconMaster.name;

const IconMaster = Object.assign(_IconMaster, {
  install: (app: App) => {
    app.component(_IconMaster.name, _IconMaster);
  }
});

export default IconMaster;