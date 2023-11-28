import type { App } from 'vue';
import _IconAlignmentVerticalCenter from './icon-alignment-vertical-center.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAlignmentVerticalCenter.name = getComponentsPrefix() + _IconAlignmentVerticalCenter.name;

const IconAlignmentVerticalCenter = Object.assign(_IconAlignmentVerticalCenter, {
  install: (app: App) => {
    app.component(_IconAlignmentVerticalCenter.name, _IconAlignmentVerticalCenter);
  }
});

export default IconAlignmentVerticalCenter;