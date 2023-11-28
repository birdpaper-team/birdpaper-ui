import type { App } from 'vue';
import _IconHoldingHands from './icon-holding-hands.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHoldingHands.name = getComponentsPrefix() + _IconHoldingHands.name;

const IconHoldingHands = Object.assign(_IconHoldingHands, {
  install: (app: App) => {
    app.component(_IconHoldingHands.name, _IconHoldingHands);
  }
});

export default IconHoldingHands;