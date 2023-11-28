import type { App } from 'vue';
import _IconBabyTaste from './icon-baby-taste.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBabyTaste.name = getComponentsPrefix() + _IconBabyTaste.name;

const IconBabyTaste = Object.assign(_IconBabyTaste, {
  install: (app: App) => {
    app.component(_IconBabyTaste.name, _IconBabyTaste);
  }
});

export default IconBabyTaste;