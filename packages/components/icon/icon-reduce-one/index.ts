import type { App } from 'vue';
import _IconReduceOne from './icon-reduce-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconReduceOne.name = getComponentsPrefix() + _IconReduceOne.name;

const IconReduceOne = Object.assign(_IconReduceOne, {
  install: (app: App) => {
    app.component(_IconReduceOne.name, _IconReduceOne);
  }
});

export default IconReduceOne;