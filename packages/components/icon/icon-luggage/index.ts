import type { App } from 'vue';
import _IconLuggage from './icon-luggage.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLuggage.name = getComponentsPrefix() + _IconLuggage.name;

const IconLuggage = Object.assign(_IconLuggage, {
  install: (app: App) => {
    app.component(_IconLuggage.name, _IconLuggage);
  }
});

export default IconLuggage;