import type { App } from 'vue';
import _IconRadish from './icon-radish.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRadish.name = getComponentsPrefix() + _IconRadish.name;

const IconRadish = Object.assign(_IconRadish, {
  install: (app: App) => {
    app.component(_IconRadish.name, _IconRadish);
  }
});

export default IconRadish;