import type { App } from 'vue';
import _IconAlignmentVerticalLeft from './icon-alignment-vertical-left.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAlignmentVerticalLeft.name = getComponentsPrefix() + _IconAlignmentVerticalLeft.name;

const IconAlignmentVerticalLeft = Object.assign(_IconAlignmentVerticalLeft, {
  install: (app: App) => {
    app.component(_IconAlignmentVerticalLeft.name, _IconAlignmentVerticalLeft);
  }
});

export default IconAlignmentVerticalLeft;