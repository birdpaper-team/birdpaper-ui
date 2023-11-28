import type { App } from 'vue';
import _IconBoyTwo from './icon-boy-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBoyTwo.name = getComponentsPrefix() + _IconBoyTwo.name;

const IconBoyTwo = Object.assign(_IconBoyTwo, {
  install: (app: App) => {
    app.component(_IconBoyTwo.name, _IconBoyTwo);
  }
});

export default IconBoyTwo;