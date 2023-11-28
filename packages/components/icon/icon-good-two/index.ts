import type { App } from 'vue';
import _IconGoodTwo from './icon-good-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGoodTwo.name = getComponentsPrefix() + _IconGoodTwo.name;

const IconGoodTwo = Object.assign(_IconGoodTwo, {
  install: (app: App) => {
    app.component(_IconGoodTwo.name, _IconGoodTwo);
  }
});

export default IconGoodTwo;