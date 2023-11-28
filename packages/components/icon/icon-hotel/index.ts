import type { App } from 'vue';
import _IconHotel from './icon-hotel.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHotel.name = getComponentsPrefix() + _IconHotel.name;

const IconHotel = Object.assign(_IconHotel, {
  install: (app: App) => {
    app.component(_IconHotel.name, _IconHotel);
  }
});

export default IconHotel;