import type { App } from 'vue';
import _IconAddressBook from './icon-address-book.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAddressBook.name = getComponentsPrefix() + _IconAddressBook.name;

const IconAddressBook = Object.assign(_IconAddressBook, {
  install: (app: App) => {
    app.component(_IconAddressBook.name, _IconAddressBook);
  }
});

export default IconAddressBook;