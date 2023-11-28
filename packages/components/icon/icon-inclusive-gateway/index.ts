import type { App } from 'vue';
import _IconInclusiveGateway from './icon-inclusive-gateway.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconInclusiveGateway.name = getComponentsPrefix() + _IconInclusiveGateway.name;

const IconInclusiveGateway = Object.assign(_IconInclusiveGateway, {
  install: (app: App) => {
    app.component(_IconInclusiveGateway.name, _IconInclusiveGateway);
  }
});

export default IconInclusiveGateway;