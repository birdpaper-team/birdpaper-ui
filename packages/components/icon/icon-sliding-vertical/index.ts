import type { App } from 'vue';
import _IconSlidingVertical from './icon-sliding-vertical.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSlidingVertical.name = getComponentsPrefix() + _IconSlidingVertical.name;

const IconSlidingVertical = Object.assign(_IconSlidingVertical, {
  install: (app: App) => {
    app.component(_IconSlidingVertical.name, _IconSlidingVertical);
  }
});

export default IconSlidingVertical;