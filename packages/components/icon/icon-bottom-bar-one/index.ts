import type { App } from 'vue';
import _IconBottomBarOne from './icon-bottom-bar-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBottomBarOne.name = getComponentsPrefix() + _IconBottomBarOne.name;

const IconBottomBarOne = Object.assign(_IconBottomBarOne, {
  install: (app: App) => {
    app.component(_IconBottomBarOne.name, _IconBottomBarOne);
  }
});

export default IconBottomBarOne;