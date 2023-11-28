import type { App } from 'vue';
import _IconNeteaseCloudMusicLine from './icon-netease-cloud-music-line.vue';

const IconNeteaseCloudMusicLine = Object.assign(_IconNeteaseCloudMusicLine, {
  install: (app: App) => {
    app.component(_IconNeteaseCloudMusicLine.name, _IconNeteaseCloudMusicLine);
  }
});

export default IconNeteaseCloudMusicLine;