import type { App } from 'vue';
import _IconBabyPants from './icon-baby-pants.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBabyPants.name = getComponentsPrefix() + _IconBabyPants.name;

const IconBabyPants = Object.assign(_IconBabyPants, {
  install: (app: App) => {
    app.component(_IconBabyPants.name, _IconBabyPants);
  }
});

export default IconBabyPants;