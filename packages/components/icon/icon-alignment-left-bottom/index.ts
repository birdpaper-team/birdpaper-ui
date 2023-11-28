import type { App } from 'vue';
import _IconAlignmentLeftBottom from './icon-alignment-left-bottom.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAlignmentLeftBottom.name = getComponentsPrefix() + _IconAlignmentLeftBottom.name;

const IconAlignmentLeftBottom = Object.assign(_IconAlignmentLeftBottom, {
  install: (app: App) => {
    app.component(_IconAlignmentLeftBottom.name, _IconAlignmentLeftBottom);
  }
});

export default IconAlignmentLeftBottom;