import type { App } from 'vue';
import _IconAlignmentTopCenter from './icon-alignment-top-center.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAlignmentTopCenter.name = getComponentsPrefix() + _IconAlignmentTopCenter.name;

const IconAlignmentTopCenter = Object.assign(_IconAlignmentTopCenter, {
  install: (app: App) => {
    app.component(_IconAlignmentTopCenter.name, _IconAlignmentTopCenter);
  }
});

export default IconAlignmentTopCenter;