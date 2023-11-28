import type { App } from 'vue';
import _IconBottomBar from './icon-bottom-bar.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBottomBar.name = getComponentsPrefix() + _IconBottomBar.name;

const IconBottomBar = Object.assign(_IconBottomBar, {
  install: (app: App) => {
    app.component(_IconBottomBar.name, _IconBottomBar);
  }
});

export default IconBottomBar;