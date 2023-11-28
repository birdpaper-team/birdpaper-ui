import type { App } from 'vue';
import _IconParking from './icon-parking.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconParking.name = getComponentsPrefix() + _IconParking.name;

const IconParking = Object.assign(_IconParking, {
  install: (app: App) => {
    app.component(_IconParking.name, _IconParking);
  }
});

export default IconParking;