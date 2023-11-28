import type { App } from 'vue';
import _IconTwoTwo from './icon-two-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTwoTwo.name = getComponentsPrefix() + _IconTwoTwo.name;

const IconTwoTwo = Object.assign(_IconTwoTwo, {
  install: (app: App) => {
    app.component(_IconTwoTwo.name, _IconTwoTwo);
  }
});

export default IconTwoTwo;