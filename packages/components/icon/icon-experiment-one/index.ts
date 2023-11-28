import type { App } from 'vue';
import _IconExperimentOne from './icon-experiment-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconExperimentOne.name = getComponentsPrefix() + _IconExperimentOne.name;

const IconExperimentOne = Object.assign(_IconExperimentOne, {
  install: (app: App) => {
    app.component(_IconExperimentOne.name, _IconExperimentOne);
  }
});

export default IconExperimentOne;