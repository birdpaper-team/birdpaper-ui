import type { App } from 'vue';
import _IconPopcorn from './icon-popcorn.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPopcorn.name = getComponentsPrefix() + _IconPopcorn.name;

const IconPopcorn = Object.assign(_IconPopcorn, {
  install: (app: App) => {
    app.component(_IconPopcorn.name, _IconPopcorn);
  }
});

export default IconPopcorn;