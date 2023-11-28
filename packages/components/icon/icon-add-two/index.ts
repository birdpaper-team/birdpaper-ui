import type { App } from 'vue';
import _IconAddTwo from './icon-add-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAddTwo.name = getComponentsPrefix() + _IconAddTwo.name;

const IconAddTwo = Object.assign(_IconAddTwo, {
  install: (app: App) => {
    app.component(_IconAddTwo.name, _IconAddTwo);
  }
});

export default IconAddTwo;