import type { App } from 'vue';
import _IconInFlight from './icon-in-flight.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconInFlight.name = getComponentsPrefix() + _IconInFlight.name;

const IconInFlight = Object.assign(_IconInFlight, {
  install: (app: App) => {
    app.component(_IconInFlight.name, _IconInFlight);
  }
});

export default IconInFlight;