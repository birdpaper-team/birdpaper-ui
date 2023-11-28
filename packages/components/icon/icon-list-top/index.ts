import type { App } from 'vue';
import _IconListTop from './icon-list-top.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconListTop.name = getComponentsPrefix() + _IconListTop.name;

const IconListTop = Object.assign(_IconListTop, {
  install: (app: App) => {
    app.component(_IconListTop.name, _IconListTop);
  }
});

export default IconListTop;