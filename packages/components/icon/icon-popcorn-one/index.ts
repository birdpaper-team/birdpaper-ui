import type { App } from 'vue';
import _IconPopcornOne from './icon-popcorn-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPopcornOne.name = getComponentsPrefix() + _IconPopcornOne.name;

const IconPopcornOne = Object.assign(_IconPopcornOne, {
  install: (app: App) => {
    app.component(_IconPopcornOne.name, _IconPopcornOne);
  }
});

export default IconPopcornOne;