import type { App } from 'vue';
import _IconCakeTwo from './icon-cake-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCakeTwo.name = getComponentsPrefix() + _IconCakeTwo.name;

const IconCakeTwo = Object.assign(_IconCakeTwo, {
  install: (app: App) => {
    app.component(_IconCakeTwo.name, _IconCakeTwo);
  }
});

export default IconCakeTwo;