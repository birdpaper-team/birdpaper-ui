import type { App } from 'vue';
import _IconHourglassFull from './icon-hourglass-full.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHourglassFull.name = getComponentsPrefix() + _IconHourglassFull.name;

const IconHourglassFull = Object.assign(_IconHourglassFull, {
  install: (app: App) => {
    app.component(_IconHourglassFull.name, _IconHourglassFull);
  }
});

export default IconHourglassFull;