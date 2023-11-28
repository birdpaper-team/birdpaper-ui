import type { App } from 'vue';
import _IconBaby from './icon-baby.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBaby.name = getComponentsPrefix() + _IconBaby.name;

const IconBaby = Object.assign(_IconBaby, {
  install: (app: App) => {
    app.component(_IconBaby.name, _IconBaby);
  }
});

export default IconBaby;