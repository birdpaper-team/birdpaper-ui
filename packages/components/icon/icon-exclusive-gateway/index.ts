import type { App } from 'vue';
import _IconExclusiveGateway from './icon-exclusive-gateway.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconExclusiveGateway.name = getComponentsPrefix() + _IconExclusiveGateway.name;

const IconExclusiveGateway = Object.assign(_IconExclusiveGateway, {
  install: (app: App) => {
    app.component(_IconExclusiveGateway.name, _IconExclusiveGateway);
  }
});

export default IconExclusiveGateway;