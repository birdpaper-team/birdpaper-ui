import type { App } from 'vue';
import _IconTwo from './icon-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTwo.name = getComponentsPrefix() + _IconTwo.name;

const IconTwo = Object.assign(_IconTwo, {
  install: (app: App) => {
    app.component(_IconTwo.name, _IconTwo);
  }
});

export default IconTwo;