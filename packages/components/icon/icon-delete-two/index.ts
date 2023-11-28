import type { App } from 'vue';
import _IconDeleteTwo from './icon-delete-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDeleteTwo.name = getComponentsPrefix() + _IconDeleteTwo.name;

const IconDeleteTwo = Object.assign(_IconDeleteTwo, {
  install: (app: App) => {
    app.component(_IconDeleteTwo.name, _IconDeleteTwo);
  }
});

export default IconDeleteTwo;