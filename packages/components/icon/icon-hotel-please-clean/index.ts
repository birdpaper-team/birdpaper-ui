import type { App } from 'vue';
import _IconHotelPleaseClean from './icon-hotel-please-clean.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHotelPleaseClean.name = getComponentsPrefix() + _IconHotelPleaseClean.name;

const IconHotelPleaseClean = Object.assign(_IconHotelPleaseClean, {
  install: (app: App) => {
    app.component(_IconHotelPleaseClean.name, _IconHotelPleaseClean);
  }
});

export default IconHotelPleaseClean;