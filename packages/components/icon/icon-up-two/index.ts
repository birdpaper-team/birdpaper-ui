import type { App } from 'vue';
import _IconUpTwo from './icon-up-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconUpTwo.name = getComponentsPrefix() + _IconUpTwo.name;

const IconUpTwo = Object.assign(_IconUpTwo, {
  install: (app: App) => {
    app.component(_IconUpTwo.name, _IconUpTwo);
  }
});

export default IconUpTwo;