import type { App } from 'vue';
import _IconBookmark from './icon-bookmark.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBookmark.name = getComponentsPrefix() + _IconBookmark.name;

const IconBookmark = Object.assign(_IconBookmark, {
  install: (app: App) => {
    app.component(_IconBookmark.name, _IconBookmark);
  }
});

export default IconBookmark;