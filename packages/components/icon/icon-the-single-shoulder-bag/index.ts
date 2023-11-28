import type { App } from 'vue';
import _IconTheSingleShoulderBag from './icon-the-single-shoulder-bag.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTheSingleShoulderBag.name = getComponentsPrefix() + _IconTheSingleShoulderBag.name;

const IconTheSingleShoulderBag = Object.assign(_IconTheSingleShoulderBag, {
  install: (app: App) => {
    app.component(_IconTheSingleShoulderBag.name, _IconTheSingleShoulderBag);
  }
});

export default IconTheSingleShoulderBag;