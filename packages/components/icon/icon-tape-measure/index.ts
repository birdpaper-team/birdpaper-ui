import type { App } from 'vue';
import _IconTapeMeasure from './icon-tape-measure.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTapeMeasure.name = getComponentsPrefix() + _IconTapeMeasure.name;

const IconTapeMeasure = Object.assign(_IconTapeMeasure, {
  install: (app: App) => {
    app.component(_IconTapeMeasure.name, _IconTapeMeasure);
  }
});

export default IconTapeMeasure;