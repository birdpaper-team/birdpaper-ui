import type { App } from 'vue';
import _IconAlignmentBottomLeft from './icon-alignment-bottom-left.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAlignmentBottomLeft.name = getComponentsPrefix() + _IconAlignmentBottomLeft.name;

const IconAlignmentBottomLeft = Object.assign(_IconAlignmentBottomLeft, {
  install: (app: App) => {
    app.component(_IconAlignmentBottomLeft.name, _IconAlignmentBottomLeft);
  }
});

export default IconAlignmentBottomLeft;