import type { App } from 'vue';
import _IconUploadCloud2Line from './icon-upload-cloud-2-line.vue';

const IconUploadCloud2Line = Object.assign(_IconUploadCloud2Line, {
  install: (app: App) => {
    app.component(_IconUploadCloud2Line.name, _IconUploadCloud2Line);
  }
});

export default IconUploadCloud2Line;