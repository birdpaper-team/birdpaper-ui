import type { App } from 'vue';
import _IconListTwo from './icon-list-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconListTwo.name = getComponentsPrefix() + _IconListTwo.name;

const IconListTwo = Object.assign(_IconListTwo, {
  install: (app: App) => {
    app.component(_IconListTwo.name, _IconListTwo);
  }
});

export default IconListTwo;