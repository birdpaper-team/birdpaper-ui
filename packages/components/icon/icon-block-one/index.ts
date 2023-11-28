import type { App } from 'vue';
import _IconBlockOne from './icon-block-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBlockOne.name = getComponentsPrefix() + _IconBlockOne.name;

const IconBlockOne = Object.assign(_IconBlockOne, {
  install: (app: App) => {
    app.component(_IconBlockOne.name, _IconBlockOne);
  }
});

export default IconBlockOne;