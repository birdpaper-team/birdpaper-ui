import type { App } from 'vue';
import _IconBlockFour from './icon-block-four.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBlockFour.name = getComponentsPrefix() + _IconBlockFour.name;

const IconBlockFour = Object.assign(_IconBlockFour, {
  install: (app: App) => {
    app.component(_IconBlockFour.name, _IconBlockFour);
  }
});

export default IconBlockFour;