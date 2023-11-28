import type { App } from 'vue';
import _IconBookshelf from './icon-bookshelf.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBookshelf.name = getComponentsPrefix() + _IconBookshelf.name;

const IconBookshelf = Object.assign(_IconBookshelf, {
  install: (app: App) => {
    app.component(_IconBookshelf.name, _IconBookshelf);
  }
});

export default IconBookshelf;