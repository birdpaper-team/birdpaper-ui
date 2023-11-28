import type { App } from 'vue';
import _IconTwoHands from './icon-two-hands.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTwoHands.name = getComponentsPrefix() + _IconTwoHands.name;

const IconTwoHands = Object.assign(_IconTwoHands, {
  install: (app: App) => {
    app.component(_IconTwoHands.name, _IconTwoHands);
  }
});

export default IconTwoHands;