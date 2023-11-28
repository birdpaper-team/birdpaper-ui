import type { App } from 'vue';
import _IconHome from './icon-home.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHome.name = getComponentsPrefix() + _IconHome.name;

const IconHome = Object.assign(_IconHome, {
  install: (app: App) => {
    app.component(_IconHome.name, _IconHome);
  }
});

export default IconHome;