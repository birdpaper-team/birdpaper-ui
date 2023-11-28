import type { App } from 'vue';
import _IconHistogram from './icon-histogram.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHistogram.name = getComponentsPrefix() + _IconHistogram.name;

const IconHistogram = Object.assign(_IconHistogram, {
  install: (app: App) => {
    app.component(_IconHistogram.name, _IconHistogram);
  }
});

export default IconHistogram;