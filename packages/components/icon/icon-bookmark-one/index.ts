import type { App } from 'vue';
import _IconBookmarkOne from './icon-bookmark-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBookmarkOne.name = getComponentsPrefix() + _IconBookmarkOne.name;

const IconBookmarkOne = Object.assign(_IconBookmarkOne, {
  install: (app: App) => {
    app.component(_IconBookmarkOne.name, _IconBookmarkOne);
  }
});

export default IconBookmarkOne;