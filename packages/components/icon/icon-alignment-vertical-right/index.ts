import type { App } from 'vue';
import _IconAlignmentVerticalRight from './icon-alignment-vertical-right.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAlignmentVerticalRight.name = getComponentsPrefix() + _IconAlignmentVerticalRight.name;

const IconAlignmentVerticalRight = Object.assign(_IconAlignmentVerticalRight, {
  install: (app: App) => {
    app.component(_IconAlignmentVerticalRight.name, _IconAlignmentVerticalRight);
  }
});

export default IconAlignmentVerticalRight;