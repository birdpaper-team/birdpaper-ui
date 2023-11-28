import type { App } from 'vue';
import _IconBlockTwo from './icon-block-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBlockTwo.name = getComponentsPrefix() + _IconBlockTwo.name;

const IconBlockTwo = Object.assign(_IconBlockTwo, {
  install: (app: App) => {
    app.component(_IconBlockTwo.name, _IconBlockTwo);
  }
});

export default IconBlockTwo;