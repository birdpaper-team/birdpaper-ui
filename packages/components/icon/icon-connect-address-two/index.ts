import type { App } from 'vue';
import _IconConnectAddressTwo from './icon-connect-address-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconConnectAddressTwo.name = getComponentsPrefix() + _IconConnectAddressTwo.name;

const IconConnectAddressTwo = Object.assign(_IconConnectAddressTwo, {
  install: (app: App) => {
    app.component(_IconConnectAddressTwo.name, _IconConnectAddressTwo);
  }
});

export default IconConnectAddressTwo;