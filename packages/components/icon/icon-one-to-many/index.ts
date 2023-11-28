import type { App } from 'vue';
import _IconOneToMany from './icon-one-to-many.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconOneToMany.name = getComponentsPrefix() + _IconOneToMany.name;

const IconOneToMany = Object.assign(_IconOneToMany, {
  install: (app: App) => {
    app.component(_IconOneToMany.name, _IconOneToMany);
  }
});

export default IconOneToMany;