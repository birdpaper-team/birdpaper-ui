import type { App } from 'vue';
import _IconReduceTwo from './icon-reduce-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconReduceTwo.name = getComponentsPrefix() + _IconReduceTwo.name;

const IconReduceTwo = Object.assign(_IconReduceTwo, {
  install: (app: App) => {
    app.component(_IconReduceTwo.name, _IconReduceTwo);
  }
});

export default IconReduceTwo;