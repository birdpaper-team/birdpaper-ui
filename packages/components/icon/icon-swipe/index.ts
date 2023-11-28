import type { App } from 'vue';
import _IconSwipe from './icon-swipe.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSwipe.name = getComponentsPrefix() + _IconSwipe.name;

const IconSwipe = Object.assign(_IconSwipe, {
  install: (app: App) => {
    app.component(_IconSwipe.name, _IconSwipe);
  }
});

export default IconSwipe;