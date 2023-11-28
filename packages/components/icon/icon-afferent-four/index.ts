import type { App } from 'vue';
import _IconAfferentFour from './icon-afferent-four.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAfferentFour.name = getComponentsPrefix() + _IconAfferentFour.name;

const IconAfferentFour = Object.assign(_IconAfferentFour, {
  install: (app: App) => {
    app.component(_IconAfferentFour.name, _IconAfferentFour);
  }
});

export default IconAfferentFour;