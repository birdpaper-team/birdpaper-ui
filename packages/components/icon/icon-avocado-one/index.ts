import type { App } from 'vue';
import _IconAvocadoOne from './icon-avocado-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAvocadoOne.name = getComponentsPrefix() + _IconAvocadoOne.name;

const IconAvocadoOne = Object.assign(_IconAvocadoOne, {
  install: (app: App) => {
    app.component(_IconAvocadoOne.name, _IconAvocadoOne);
  }
});

export default IconAvocadoOne;