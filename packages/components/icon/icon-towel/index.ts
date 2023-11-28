import type { App } from 'vue';
import _IconTowel from './icon-towel.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTowel.name = getComponentsPrefix() + _IconTowel.name;

const IconTowel = Object.assign(_IconTowel, {
  install: (app: App) => {
    app.component(_IconTowel.name, _IconTowel);
  }
});

export default IconTowel;