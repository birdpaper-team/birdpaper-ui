import type { App } from 'vue';
import _IconBabyFeet from './icon-baby-feet.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBabyFeet.name = getComponentsPrefix() + _IconBabyFeet.name;

const IconBabyFeet = Object.assign(_IconBabyFeet, {
  install: (app: App) => {
    app.component(_IconBabyFeet.name, _IconBabyFeet);
  }
});

export default IconBabyFeet;