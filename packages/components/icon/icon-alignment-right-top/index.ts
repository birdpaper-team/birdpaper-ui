import type { App } from 'vue';
import _IconAlignmentRightTop from './icon-alignment-right-top.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAlignmentRightTop.name = getComponentsPrefix() + _IconAlignmentRightTop.name;

const IconAlignmentRightTop = Object.assign(_IconAlignmentRightTop, {
  install: (app: App) => {
    app.component(_IconAlignmentRightTop.name, _IconAlignmentRightTop);
  }
});

export default IconAlignmentRightTop;