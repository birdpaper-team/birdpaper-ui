import type { App } from 'vue';
import _IconVideoFile from './icon-video-file.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconVideoFile.name = getComponentsPrefix() + _IconVideoFile.name;

const IconVideoFile = Object.assign(_IconVideoFile, {
  install: (app: App) => {
    app.component(_IconVideoFile.name, _IconVideoFile);
  }
});

export default IconVideoFile;