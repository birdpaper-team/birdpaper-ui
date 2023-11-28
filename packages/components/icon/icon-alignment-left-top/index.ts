import type { App } from 'vue';
import _IconAlignmentLeftTop from './icon-alignment-left-top.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAlignmentLeftTop.name = getComponentsPrefix() + _IconAlignmentLeftTop.name;

const IconAlignmentLeftTop = Object.assign(_IconAlignmentLeftTop, {
  install: (app: App) => {
    app.component(_IconAlignmentLeftTop.name, _IconAlignmentLeftTop);
  }
});

export default IconAlignmentLeftTop;