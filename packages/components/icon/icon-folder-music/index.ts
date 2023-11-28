import type { App } from 'vue';
import _IconFolderMusic from './icon-folder-music.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFolderMusic.name = getComponentsPrefix() + _IconFolderMusic.name;

const IconFolderMusic = Object.assign(_IconFolderMusic, {
  install: (app: App) => {
    app.component(_IconFolderMusic.name, _IconFolderMusic);
  }
});

export default IconFolderMusic;