import type { App } from 'vue';
import _IconBlade from './icon-blade.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBlade.name = getComponentsPrefix() + _IconBlade.name;

const IconBlade = Object.assign(_IconBlade, {
  install: (app: App) => {
    app.component(_IconBlade.name, _IconBlade);
  }
});

export default IconBlade;