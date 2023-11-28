import type { App } from 'vue';
import _IconCrown from './icon-crown.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCrown.name = getComponentsPrefix() + _IconCrown.name;

const IconCrown = Object.assign(_IconCrown, {
  install: (app: App) => {
    app.component(_IconCrown.name, _IconCrown);
  }
});

export default IconCrown;