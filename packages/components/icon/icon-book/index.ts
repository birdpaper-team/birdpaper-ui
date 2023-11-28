import type { App } from 'vue';
import _IconBook from './icon-book.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBook.name = getComponentsPrefix() + _IconBook.name;

const IconBook = Object.assign(_IconBook, {
  install: (app: App) => {
    app.component(_IconBook.name, _IconBook);
  }
});

export default IconBook;