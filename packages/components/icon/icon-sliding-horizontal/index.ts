import type { App } from 'vue';
import _IconSlidingHorizontal from './icon-sliding-horizontal.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSlidingHorizontal.name = getComponentsPrefix() + _IconSlidingHorizontal.name;

const IconSlidingHorizontal = Object.assign(_IconSlidingHorizontal, {
  install: (app: App) => {
    app.component(_IconSlidingHorizontal.name, _IconSlidingHorizontal);
  }
});

export default IconSlidingHorizontal;