import type { App } from 'vue';
import _IconAlignmentLeftCenter from './icon-alignment-left-center.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAlignmentLeftCenter.name = getComponentsPrefix() + _IconAlignmentLeftCenter.name;

const IconAlignmentLeftCenter = Object.assign(_IconAlignmentLeftCenter, {
  install: (app: App) => {
    app.component(_IconAlignmentLeftCenter.name, _IconAlignmentLeftCenter);
  }
});

export default IconAlignmentLeftCenter;