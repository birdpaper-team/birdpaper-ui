import type { App } from 'vue';
import _IconMark from './icon-mark.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMark.name = getComponentsPrefix() + _IconMark.name;

const IconMark = Object.assign(_IconMark, {
  install: (app: App) => {
    app.component(_IconMark.name, _IconMark);
  }
});

export default IconMark;