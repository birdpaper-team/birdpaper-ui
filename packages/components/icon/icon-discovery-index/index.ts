import type { App } from 'vue';
import _IconDiscoveryIndex from './icon-discovery-index.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDiscoveryIndex.name = getComponentsPrefix() + _IconDiscoveryIndex.name;

const IconDiscoveryIndex = Object.assign(_IconDiscoveryIndex, {
  install: (app: App) => {
    app.component(_IconDiscoveryIndex.name, _IconDiscoveryIndex);
  }
});

export default IconDiscoveryIndex;