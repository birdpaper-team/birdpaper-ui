import type { App } from 'vue';
import _IconReduceDecimalPlaces from './icon-reduce-decimal-places.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconReduceDecimalPlaces.name = getComponentsPrefix() + _IconReduceDecimalPlaces.name;

const IconReduceDecimalPlaces = Object.assign(_IconReduceDecimalPlaces, {
  install: (app: App) => {
    app.component(_IconReduceDecimalPlaces.name, _IconReduceDecimalPlaces);
  }
});

export default IconReduceDecimalPlaces;