import type { App } from 'vue';
import _IconXigua from './icon-xigua.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconXigua.name = getComponentsPrefix() + _IconXigua.name;

const IconXigua = Object.assign(_IconXigua, {
  install: (app: App) => {
    app.component(_IconXigua.name, _IconXigua);
  }
});

export default IconXigua;