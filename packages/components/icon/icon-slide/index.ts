import type { App } from 'vue';
import _IconSlide from './icon-slide.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSlide.name = getComponentsPrefix() + _IconSlide.name;

const IconSlide = Object.assign(_IconSlide, {
  install: (app: App) => {
    app.component(_IconSlide.name, _IconSlide);
  }
});

export default IconSlide;