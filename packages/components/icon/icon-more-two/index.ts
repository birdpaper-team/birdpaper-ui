import type { App } from 'vue';
import _IconMoreTwo from './icon-more-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMoreTwo.name = getComponentsPrefix() + _IconMoreTwo.name;

const IconMoreTwo = Object.assign(_IconMoreTwo, {
  install: (app: App) => {
    app.component(_IconMoreTwo.name, _IconMoreTwo);
  }
});

export default IconMoreTwo;