import type { App } from 'vue';
import _IconFolderMusicOne from './icon-folder-music-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFolderMusicOne.name = getComponentsPrefix() + _IconFolderMusicOne.name;

const IconFolderMusicOne = Object.assign(_IconFolderMusicOne, {
  install: (app: App) => {
    app.component(_IconFolderMusicOne.name, _IconFolderMusicOne);
  }
});

export default IconFolderMusicOne;