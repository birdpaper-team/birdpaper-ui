import type { App } from 'vue';
import _IconRightTwo from './icon-right-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRightTwo.name = getComponentsPrefix() + _IconRightTwo.name;

const IconRightTwo = Object.assign(_IconRightTwo, {
  install: (app: App) => {
    app.component(_IconRightTwo.name, _IconRightTwo);
  }
});

export default IconRightTwo;