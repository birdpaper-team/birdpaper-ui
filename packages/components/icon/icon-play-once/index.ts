import type { App } from 'vue';
import _IconPlayOnce from './icon-play-once.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPlayOnce.name = getComponentsPrefix() + _IconPlayOnce.name;

const IconPlayOnce = Object.assign(_IconPlayOnce, {
  install: (app: App) => {
    app.component(_IconPlayOnce.name, _IconPlayOnce);
  }
});

export default IconPlayOnce;