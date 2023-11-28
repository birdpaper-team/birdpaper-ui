import type { App } from 'vue';
import _IconAfferentThree from './icon-afferent-three.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAfferentThree.name = getComponentsPrefix() + _IconAfferentThree.name;

const IconAfferentThree = Object.assign(_IconAfferentThree, {
  install: (app: App) => {
    app.component(_IconAfferentThree.name, _IconAfferentThree);
  }
});

export default IconAfferentThree;