import type { App } from 'vue';
import _IconConvergingGateway from './icon-converging-gateway.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconConvergingGateway.name = getComponentsPrefix() + _IconConvergingGateway.name;

const IconConvergingGateway = Object.assign(_IconConvergingGateway, {
  install: (app: App) => {
    app.component(_IconConvergingGateway.name, _IconConvergingGateway);
  }
});

export default IconConvergingGateway;