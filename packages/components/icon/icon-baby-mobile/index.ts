import type { App } from 'vue';
import _IconBabyMobile from './icon-baby-mobile.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBabyMobile.name = getComponentsPrefix() + _IconBabyMobile.name;

const IconBabyMobile = Object.assign(_IconBabyMobile, {
  install: (app: App) => {
    app.component(_IconBabyMobile.name, _IconBabyMobile);
  }
});

export default IconBabyMobile;