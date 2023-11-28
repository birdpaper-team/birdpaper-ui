import type { App } from 'vue';
import _IconMusicList from './icon-music-list.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMusicList.name = getComponentsPrefix() + _IconMusicList.name;

const IconMusicList = Object.assign(_IconMusicList, {
  install: (app: App) => {
    app.component(_IconMusicList.name, _IconMusicList);
  }
});

export default IconMusicList;