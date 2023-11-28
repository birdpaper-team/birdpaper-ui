import type { App } from 'vue';
import _IconDog from './icon-dog.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDog.name = getComponentsPrefix() + _IconDog.name;

const IconDog = Object.assign(_IconDog, {
  install: (app: App) => {
    app.component(_IconDog.name, _IconDog);
  }
});

export default IconDog;