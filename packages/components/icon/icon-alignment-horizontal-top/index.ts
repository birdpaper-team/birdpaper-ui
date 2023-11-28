import type { App } from 'vue';
import _IconAlignmentHorizontalTop from './icon-alignment-horizontal-top.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAlignmentHorizontalTop.name = getComponentsPrefix() + _IconAlignmentHorizontalTop.name;

const IconAlignmentHorizontalTop = Object.assign(_IconAlignmentHorizontalTop, {
  install: (app: App) => {
    app.component(_IconAlignmentHorizontalTop.name, _IconAlignmentHorizontalTop);
  }
});

export default IconAlignmentHorizontalTop;