import type { App } from 'vue';
import _IconAlignTextBottom from './icon-align-text-bottom.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAlignTextBottom.name = getComponentsPrefix() + _IconAlignTextBottom.name;

const IconAlignTextBottom = Object.assign(_IconAlignTextBottom, {
  install: (app: App) => {
    app.component(_IconAlignTextBottom.name, _IconAlignTextBottom);
  }
});

export default IconAlignTextBottom;