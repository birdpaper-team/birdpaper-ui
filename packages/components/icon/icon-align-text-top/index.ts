import type { App } from 'vue';
import _IconAlignTextTop from './icon-align-text-top.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAlignTextTop.name = getComponentsPrefix() + _IconAlignTextTop.name;

const IconAlignTextTop = Object.assign(_IconAlignTextTop, {
  install: (app: App) => {
    app.component(_IconAlignTextTop.name, _IconAlignTextTop);
  }
});

export default IconAlignTextTop;