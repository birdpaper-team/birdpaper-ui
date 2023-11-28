import type { App } from 'vue';
import _IconParallelGateway from './icon-parallel-gateway.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconParallelGateway.name = getComponentsPrefix() + _IconParallelGateway.name;

const IconParallelGateway = Object.assign(_IconParallelGateway, {
  install: (app: App) => {
    app.component(_IconParallelGateway.name, _IconParallelGateway);
  }
});

export default IconParallelGateway;