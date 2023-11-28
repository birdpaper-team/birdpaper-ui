import type { App } from 'vue';
import _IconBookmarkThree from './icon-bookmark-three.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBookmarkThree.name = getComponentsPrefix() + _IconBookmarkThree.name;

const IconBookmarkThree = Object.assign(_IconBookmarkThree, {
  install: (app: App) => {
    app.component(_IconBookmarkThree.name, _IconBookmarkThree);
  }
});

export default IconBookmarkThree;