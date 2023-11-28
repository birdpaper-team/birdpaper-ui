import type { App } from 'vue';
import _IconTableLamp from './icon-table-lamp.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTableLamp.name = getComponentsPrefix() + _IconTableLamp.name;

const IconTableLamp = Object.assign(_IconTableLamp, {
  install: (app: App) => {
    app.component(_IconTableLamp.name, _IconTableLamp);
  }
});

export default IconTableLamp;