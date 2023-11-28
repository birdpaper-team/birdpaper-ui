import type { App } from 'vue';
import _IconGiftBag from './icon-gift-bag.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGiftBag.name = getComponentsPrefix() + _IconGiftBag.name;

const IconGiftBag = Object.assign(_IconGiftBag, {
  install: (app: App) => {
    app.component(_IconGiftBag.name, _IconGiftBag);
  }
});

export default IconGiftBag;