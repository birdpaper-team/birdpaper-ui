import type { App } from 'vue';
import _IconClickTapTwo from './icon-click-tap-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconClickTapTwo.name = getComponentsPrefix() + _IconClickTapTwo.name;

const IconClickTapTwo = Object.assign(_IconClickTapTwo, {
  install: (app: App) => {
    app.component(_IconClickTapTwo.name, _IconClickTapTwo);
  }
});

export default IconClickTapTwo;