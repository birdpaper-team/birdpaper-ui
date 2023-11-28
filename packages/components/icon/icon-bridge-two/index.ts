import type { App } from 'vue';
import _IconBridgeTwo from './icon-bridge-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBridgeTwo.name = getComponentsPrefix() + _IconBridgeTwo.name;

const IconBridgeTwo = Object.assign(_IconBridgeTwo, {
  install: (app: App) => {
    app.component(_IconBridgeTwo.name, _IconBridgeTwo);
  }
});

export default IconBridgeTwo;