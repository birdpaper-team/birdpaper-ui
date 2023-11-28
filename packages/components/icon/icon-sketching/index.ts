import type { App } from 'vue';
import _IconSketching from './icon-sketching.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSketching.name = getComponentsPrefix() + _IconSketching.name;

const IconSketching = Object.assign(_IconSketching, {
  install: (app: App) => {
    app.component(_IconSketching.name, _IconSketching);
  }
});

export default IconSketching;