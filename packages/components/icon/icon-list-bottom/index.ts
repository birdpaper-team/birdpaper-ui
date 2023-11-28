import type { App } from 'vue';
import _IconListBottom from './icon-list-bottom.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconListBottom.name = getComponentsPrefix() + _IconListBottom.name;

const IconListBottom = Object.assign(_IconListBottom, {
  install: (app: App) => {
    app.component(_IconListBottom.name, _IconListBottom);
  }
});

export default IconListBottom;