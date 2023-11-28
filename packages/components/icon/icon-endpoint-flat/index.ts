import type { App } from 'vue';
import _IconEndpointFlat from './icon-endpoint-flat.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEndpointFlat.name = getComponentsPrefix() + _IconEndpointFlat.name;

const IconEndpointFlat = Object.assign(_IconEndpointFlat, {
  install: (app: App) => {
    app.component(_IconEndpointFlat.name, _IconEndpointFlat);
  }
});

export default IconEndpointFlat;