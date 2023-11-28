import type { App } from 'vue';
import _IconOverallReduction from './icon-overall-reduction.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconOverallReduction.name = getComponentsPrefix() + _IconOverallReduction.name;

const IconOverallReduction = Object.assign(_IconOverallReduction, {
  install: (app: App) => {
    app.component(_IconOverallReduction.name, _IconOverallReduction);
  }
});

export default IconOverallReduction;