import type { App } from 'vue';
import _IconBabyOne from './icon-baby-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBabyOne.name = getComponentsPrefix() + _IconBabyOne.name;

const IconBabyOne = Object.assign(_IconBabyOne, {
  install: (app: App) => {
    app.component(_IconBabyOne.name, _IconBabyOne);
  }
});

export default IconBabyOne;