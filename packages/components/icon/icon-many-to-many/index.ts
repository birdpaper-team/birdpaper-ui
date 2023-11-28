import type { App } from 'vue';
import _IconManyToMany from './icon-many-to-many.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconManyToMany.name = getComponentsPrefix() + _IconManyToMany.name;

const IconManyToMany = Object.assign(_IconManyToMany, {
  install: (app: App) => {
    app.component(_IconManyToMany.name, _IconManyToMany);
  }
});

export default IconManyToMany;