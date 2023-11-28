import type { App } from 'vue';
import _IconAlignmentRightBottom from './icon-alignment-right-bottom.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAlignmentRightBottom.name = getComponentsPrefix() + _IconAlignmentRightBottom.name;

const IconAlignmentRightBottom = Object.assign(_IconAlignmentRightBottom, {
  install: (app: App) => {
    app.component(_IconAlignmentRightBottom.name, _IconAlignmentRightBottom);
  }
});

export default IconAlignmentRightBottom;