import type { App } from 'vue';
import _IconCarouselVideo from './icon-carousel-video.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCarouselVideo.name = getComponentsPrefix() + _IconCarouselVideo.name;

const IconCarouselVideo = Object.assign(_IconCarouselVideo, {
  install: (app: App) => {
    app.component(_IconCarouselVideo.name, _IconCarouselVideo);
  }
});

export default IconCarouselVideo;