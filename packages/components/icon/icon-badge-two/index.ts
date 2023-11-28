import type { App } from 'vue';
import _IconBadgeTwo from './icon-badge-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBadgeTwo.name = getComponentsPrefix() + _IconBadgeTwo.name;

const IconBadgeTwo = Object.assign(_IconBadgeTwo, {
  install: (app: App) => {
    app.component(_IconBadgeTwo.name, _IconBadgeTwo);
  }
});

export default IconBadgeTwo;