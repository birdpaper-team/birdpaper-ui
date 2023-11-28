import type { App } from 'vue';
import _IconBaokemeng from './icon-baokemeng.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBaokemeng.name = getComponentsPrefix() + _IconBaokemeng.name;

const IconBaokemeng = Object.assign(_IconBaokemeng, {
  install: (app: App) => {
    app.component(_IconBaokemeng.name, _IconBaokemeng);
  }
});

export default IconBaokemeng;