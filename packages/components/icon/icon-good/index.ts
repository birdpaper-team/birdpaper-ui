import type { App } from 'vue';
import _IconGood from './icon-good.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGood.name = getComponentsPrefix() + _IconGood.name;

const IconGood = Object.assign(_IconGood, {
  install: (app: App) => {
    app.component(_IconGood.name, _IconGood);
  }
});

export default IconGood;