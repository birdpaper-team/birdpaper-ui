import type { App } from 'vue';
import _IconElectrocardiogram from './icon-electrocardiogram.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconElectrocardiogram.name = getComponentsPrefix() + _IconElectrocardiogram.name;

const IconElectrocardiogram = Object.assign(_IconElectrocardiogram, {
  install: (app: App) => {
    app.component(_IconElectrocardiogram.name, _IconElectrocardiogram);
  }
});

export default IconElectrocardiogram;