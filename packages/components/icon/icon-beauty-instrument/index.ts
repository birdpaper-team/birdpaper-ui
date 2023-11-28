import type { App } from 'vue';
import _IconBeautyInstrument from './icon-beauty-instrument.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBeautyInstrument.name = getComponentsPrefix() + _IconBeautyInstrument.name;

const IconBeautyInstrument = Object.assign(_IconBeautyInstrument, {
  install: (app: App) => {
    app.component(_IconBeautyInstrument.name, _IconBeautyInstrument);
  }
});

export default IconBeautyInstrument;