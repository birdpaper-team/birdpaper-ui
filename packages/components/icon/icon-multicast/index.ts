import type { App } from 'vue';
import _IconMulticast from './icon-multicast.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMulticast.name = getComponentsPrefix() + _IconMulticast.name;

const IconMulticast = Object.assign(_IconMulticast, {
  install: (app: App) => {
    app.component(_IconMulticast.name, _IconMulticast);
  }
});

export default IconMulticast;