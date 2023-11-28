import type { App } from 'vue';
import _IconAlignmentHorizontalCenter from './icon-alignment-horizontal-center.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAlignmentHorizontalCenter.name = getComponentsPrefix() + _IconAlignmentHorizontalCenter.name;

const IconAlignmentHorizontalCenter = Object.assign(_IconAlignmentHorizontalCenter, {
  install: (app: App) => {
    app.component(_IconAlignmentHorizontalCenter.name, _IconAlignmentHorizontalCenter);
  }
});

export default IconAlignmentHorizontalCenter;