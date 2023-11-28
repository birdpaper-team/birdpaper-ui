import type { App } from 'vue';
import _IconAnchorOne from './icon-anchor-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAnchorOne.name = getComponentsPrefix() + _IconAnchorOne.name;

const IconAnchorOne = Object.assign(_IconAnchorOne, {
  install: (app: App) => {
    app.component(_IconAnchorOne.name, _IconAnchorOne);
  }
});

export default IconAnchorOne;