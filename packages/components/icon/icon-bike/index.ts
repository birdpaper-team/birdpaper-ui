import type { App } from 'vue';
import _IconBike from './icon-bike.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBike.name = getComponentsPrefix() + _IconBike.name;

const IconBike = Object.assign(_IconBike, {
  install: (app: App) => {
    app.component(_IconBike.name, _IconBike);
  }
});

export default IconBike;