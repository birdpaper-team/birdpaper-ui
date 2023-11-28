import type { App } from 'vue';
import _IconBadge from './icon-badge.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBadge.name = getComponentsPrefix() + _IconBadge.name;

const IconBadge = Object.assign(_IconBadge, {
  install: (app: App) => {
    app.component(_IconBadge.name, _IconBadge);
  }
});

export default IconBadge;