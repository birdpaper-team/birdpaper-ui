import type { App } from 'vue';
import _IconPlaybackProgress from './icon-playback-progress.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPlaybackProgress.name = getComponentsPrefix() + _IconPlaybackProgress.name;

const IconPlaybackProgress = Object.assign(_IconPlaybackProgress, {
  install: (app: App) => {
    app.component(_IconPlaybackProgress.name, _IconPlaybackProgress);
  }
});

export default IconPlaybackProgress;