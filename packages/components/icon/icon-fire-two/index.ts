import type { App } from 'vue';
import _IconFireTwo from './icon-fire-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFireTwo.name = getComponentsPrefix() + _IconFireTwo.name;

const IconFireTwo = Object.assign(_IconFireTwo, {
  install: (app: App) => {
    app.component(_IconFireTwo.name, _IconFireTwo);
  }
});

export default IconFireTwo;