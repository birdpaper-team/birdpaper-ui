import type { App } from 'vue';
import _IconHands from './icon-hands.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHands.name = getComponentsPrefix() + _IconHands.name;

const IconHands = Object.assign(_IconHands, {
  install: (app: App) => {
    app.component(_IconHands.name, _IconHands);
  }
});

export default IconHands;