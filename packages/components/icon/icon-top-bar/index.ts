import type { App } from 'vue';
import _IconTopBar from './icon-top-bar.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTopBar.name = getComponentsPrefix() + _IconTopBar.name;

const IconTopBar = Object.assign(_IconTopBar, {
  install: (app: App) => {
    app.component(_IconTopBar.name, _IconTopBar);
  }
});

export default IconTopBar;