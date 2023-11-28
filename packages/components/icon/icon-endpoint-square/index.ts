import type { App } from 'vue';
import _IconEndpointSquare from './icon-endpoint-square.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEndpointSquare.name = getComponentsPrefix() + _IconEndpointSquare.name;

const IconEndpointSquare = Object.assign(_IconEndpointSquare, {
  install: (app: App) => {
    app.component(_IconEndpointSquare.name, _IconEndpointSquare);
  }
});

export default IconEndpointSquare;