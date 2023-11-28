import type { App } from 'vue';
import _IconAfferentTwo from './icon-afferent-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAfferentTwo.name = getComponentsPrefix() + _IconAfferentTwo.name;

const IconAfferentTwo = Object.assign(_IconAfferentTwo, {
  install: (app: App) => {
    app.component(_IconAfferentTwo.name, _IconAfferentTwo);
  }
});

export default IconAfferentTwo;