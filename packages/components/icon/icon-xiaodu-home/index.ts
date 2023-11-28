import type { App } from 'vue';
import _IconXiaoduHome from './icon-xiaodu-home.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconXiaoduHome.name = getComponentsPrefix() + _IconXiaoduHome.name;

const IconXiaoduHome = Object.assign(_IconXiaoduHome, {
  install: (app: App) => {
    app.component(_IconXiaoduHome.name, _IconXiaoduHome);
  }
});

export default IconXiaoduHome;