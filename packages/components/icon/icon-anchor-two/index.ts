import type { App } from 'vue';
import _IconAnchorTwo from './icon-anchor-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAnchorTwo.name = getComponentsPrefix() + _IconAnchorTwo.name;

const IconAnchorTwo = Object.assign(_IconAnchorTwo, {
  install: (app: App) => {
    app.component(_IconAnchorTwo.name, _IconAnchorTwo);
  }
});

export default IconAnchorTwo;