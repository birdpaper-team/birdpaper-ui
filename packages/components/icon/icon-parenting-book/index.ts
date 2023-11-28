import type { App } from 'vue';
import _IconParentingBook from './icon-parenting-book.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconParentingBook.name = getComponentsPrefix() + _IconParentingBook.name;

const IconParentingBook = Object.assign(_IconParentingBook, {
  install: (app: App) => {
    app.component(_IconParentingBook.name, _IconParentingBook);
  }
});

export default IconParentingBook;