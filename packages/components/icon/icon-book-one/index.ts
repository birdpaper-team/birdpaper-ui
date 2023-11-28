import type { App } from 'vue';
import _IconBookOne from './icon-book-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBookOne.name = getComponentsPrefix() + _IconBookOne.name;

const IconBookOne = Object.assign(_IconBookOne, {
  install: (app: App) => {
    app.component(_IconBookOne.name, _IconBookOne);
  }
});

export default IconBookOne;