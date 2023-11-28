import type { App } from 'vue';
import _IconMultiPictureCarousel from './icon-multi-picture-carousel.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMultiPictureCarousel.name = getComponentsPrefix() + _IconMultiPictureCarousel.name;

const IconMultiPictureCarousel = Object.assign(_IconMultiPictureCarousel, {
  install: (app: App) => {
    app.component(_IconMultiPictureCarousel.name, _IconMultiPictureCarousel);
  }
});

export default IconMultiPictureCarousel;