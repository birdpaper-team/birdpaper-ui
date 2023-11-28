import type { App } from 'vue';
import _IconEqualRatio from './icon-equal-ratio.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEqualRatio.name = getComponentsPrefix() + _IconEqualRatio.name;

const IconEqualRatio = Object.assign(_IconEqualRatio, {
  install: (app: App) => {
    app.component(_IconEqualRatio.name, _IconEqualRatio);
  }
});

export default IconEqualRatio;