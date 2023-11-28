import type { App } from 'vue';
import _IconAlignTop from './icon-align-top.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAlignTop.name = getComponentsPrefix() + _IconAlignTop.name;

const IconAlignTop = Object.assign(_IconAlignTop, {
  install: (app: App) => {
    app.component(_IconAlignTop.name, _IconAlignTop);
  }
});

export default IconAlignTop;