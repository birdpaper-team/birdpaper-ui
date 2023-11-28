import type { App } from 'vue';
import _IconAlignmentRightCenter from './icon-alignment-right-center.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAlignmentRightCenter.name = getComponentsPrefix() + _IconAlignmentRightCenter.name;

const IconAlignmentRightCenter = Object.assign(_IconAlignmentRightCenter, {
  install: (app: App) => {
    app.component(_IconAlignmentRightCenter.name, _IconAlignmentRightCenter);
  }
});

export default IconAlignmentRightCenter;