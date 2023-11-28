import type { App } from 'vue';
import _IconShoulderBag from './icon-shoulder-bag.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconShoulderBag.name = getComponentsPrefix() + _IconShoulderBag.name;

const IconShoulderBag = Object.assign(_IconShoulderBag, {
  install: (app: App) => {
    app.component(_IconShoulderBag.name, _IconShoulderBag);
  }
});

export default IconShoulderBag;