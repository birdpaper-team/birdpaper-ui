import type { App } from 'vue';
import _IconLollipop from './icon-lollipop.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLollipop.name = getComponentsPrefix() + _IconLollipop.name;

const IconLollipop = Object.assign(_IconLollipop, {
  install: (app: App) => {
    app.component(_IconLollipop.name, _IconLollipop);
  }
});

export default IconLollipop;