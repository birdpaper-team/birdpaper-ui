import type { App } from 'vue';
import _IconSum from './icon-sum.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSum.name = getComponentsPrefix() + _IconSum.name;

const IconSum = Object.assign(_IconSum, {
  install: (app: App) => {
    app.component(_IconSum.name, _IconSum);
  }
});

export default IconSum;