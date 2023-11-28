import type { App } from 'vue';
import _IconBaggageDelay from './icon-baggage-delay.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBaggageDelay.name = getComponentsPrefix() + _IconBaggageDelay.name;

const IconBaggageDelay = Object.assign(_IconBaggageDelay, {
  install: (app: App) => {
    app.component(_IconBaggageDelay.name, _IconBaggageDelay);
  }
});

export default IconBaggageDelay;