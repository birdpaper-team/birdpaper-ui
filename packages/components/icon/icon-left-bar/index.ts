import type { App } from 'vue';
import _IconLeftBar from './icon-left-bar.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLeftBar.name = getComponentsPrefix() + _IconLeftBar.name;

const IconLeftBar = Object.assign(_IconLeftBar, {
  install: (app: App) => {
    app.component(_IconLeftBar.name, _IconLeftBar);
  }
});

export default IconLeftBar;