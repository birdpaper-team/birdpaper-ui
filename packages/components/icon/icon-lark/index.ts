import type { App } from 'vue';
import _IconLark from './icon-lark.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLark.name = getComponentsPrefix() + _IconLark.name;

const IconLark = Object.assign(_IconLark, {
  install: (app: App) => {
    app.component(_IconLark.name, _IconLark);
  }
});

export default IconLark;