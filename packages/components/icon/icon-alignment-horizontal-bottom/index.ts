import type { App } from 'vue';
import _IconAlignmentHorizontalBottom from './icon-alignment-horizontal-bottom.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAlignmentHorizontalBottom.name = getComponentsPrefix() + _IconAlignmentHorizontalBottom.name;

const IconAlignmentHorizontalBottom = Object.assign(_IconAlignmentHorizontalBottom, {
  install: (app: App) => {
    app.component(_IconAlignmentHorizontalBottom.name, _IconAlignmentHorizontalBottom);
  }
});

export default IconAlignmentHorizontalBottom;