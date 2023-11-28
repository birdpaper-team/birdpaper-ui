import type { App } from 'vue';
import _IconOptional from './icon-optional.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconOptional.name = getComponentsPrefix() + _IconOptional.name;

const IconOptional = Object.assign(_IconOptional, {
  install: (app: App) => {
    app.component(_IconOptional.name, _IconOptional);
  }
});

export default IconOptional;