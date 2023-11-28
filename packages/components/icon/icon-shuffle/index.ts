import type { App } from 'vue';
import _IconShuffle from './icon-shuffle.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconShuffle.name = getComponentsPrefix() + _IconShuffle.name;

const IconShuffle = Object.assign(_IconShuffle, {
  install: (app: App) => {
    app.component(_IconShuffle.name, _IconShuffle);
  }
});

export default IconShuffle;