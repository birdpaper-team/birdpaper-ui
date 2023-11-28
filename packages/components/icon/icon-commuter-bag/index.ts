import type { App } from 'vue';
import _IconCommuterBag from './icon-commuter-bag.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCommuterBag.name = getComponentsPrefix() + _IconCommuterBag.name;

const IconCommuterBag = Object.assign(_IconCommuterBag, {
  install: (app: App) => {
    app.component(_IconCommuterBag.name, _IconCommuterBag);
  }
});

export default IconCommuterBag;