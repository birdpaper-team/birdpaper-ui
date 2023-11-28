import type { App } from 'vue';
import _IconWavesRight from './icon-waves-right.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWavesRight.name = getComponentsPrefix() + _IconWavesRight.name;

const IconWavesRight = Object.assign(_IconWavesRight, {
  install: (app: App) => {
    app.component(_IconWavesRight.name, _IconWavesRight);
  }
});

export default IconWavesRight;