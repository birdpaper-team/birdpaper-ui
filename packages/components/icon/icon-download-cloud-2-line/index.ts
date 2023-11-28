import type { App } from 'vue';
import _IconDownloadCloud2Line from './icon-download-cloud-2-line.vue';

const IconDownloadCloud2Line = Object.assign(_IconDownloadCloud2Line, {
  install: (app: App) => {
    app.component(_IconDownloadCloud2Line.name, _IconDownloadCloud2Line);
  }
});

export default IconDownloadCloud2Line;