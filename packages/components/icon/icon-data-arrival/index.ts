import type { App } from 'vue';
import _IconDataArrival from './icon-data-arrival.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDataArrival.name = getComponentsPrefix() + _IconDataArrival.name;

const IconDataArrival = Object.assign(_IconDataArrival, {
  install: (app: App) => {
    app.component(_IconDataArrival.name, _IconDataArrival);
  }
});

export default IconDataArrival;