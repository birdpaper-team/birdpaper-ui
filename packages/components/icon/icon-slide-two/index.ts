import type { App } from 'vue';
import _IconSlideTwo from './icon-slide-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSlideTwo.name = getComponentsPrefix() + _IconSlideTwo.name;

const IconSlideTwo = Object.assign(_IconSlideTwo, {
  install: (app: App) => {
    app.component(_IconSlideTwo.name, _IconSlideTwo);
  }
});

export default IconSlideTwo;