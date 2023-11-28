import type { App } from 'vue';
import _IconVideo from './icon-video.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconVideo.name = getComponentsPrefix() + _IconVideo.name;

const IconVideo = Object.assign(_IconVideo, {
  install: (app: App) => {
    app.component(_IconVideo.name, _IconVideo);
  }
});

export default IconVideo;