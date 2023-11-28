import type { App } from 'vue';
import _IconDongchedi from './icon-dongchedi.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDongchedi.name = getComponentsPrefix() + _IconDongchedi.name;

const IconDongchedi = Object.assign(_IconDongchedi, {
  install: (app: App) => {
    app.component(_IconDongchedi.name, _IconDongchedi);
  }
});

export default IconDongchedi;