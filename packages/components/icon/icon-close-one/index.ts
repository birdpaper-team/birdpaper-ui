import type { App } from 'vue';
import _IconCloseOne from './icon-close-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCloseOne.name = getComponentsPrefix() + _IconCloseOne.name;

const IconCloseOne = Object.assign(_IconCloseOne, {
  install: (app: App) => {
    app.component(_IconCloseOne.name, _IconCloseOne);
  }
});

export default IconCloseOne;