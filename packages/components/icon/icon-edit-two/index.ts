import type { App } from 'vue';
import _IconEditTwo from './icon-edit-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEditTwo.name = getComponentsPrefix() + _IconEditTwo.name;

const IconEditTwo = Object.assign(_IconEditTwo, {
  install: (app: App) => {
    app.component(_IconEditTwo.name, _IconEditTwo);
  }
});

export default IconEditTwo;