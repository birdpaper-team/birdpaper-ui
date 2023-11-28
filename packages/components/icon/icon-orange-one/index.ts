import type { App } from 'vue';
import _IconOrangeOne from './icon-orange-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconOrangeOne.name = getComponentsPrefix() + _IconOrangeOne.name;

const IconOrangeOne = Object.assign(_IconOrangeOne, {
  install: (app: App) => {
    app.component(_IconOrangeOne.name, _IconOrangeOne);
  }
});

export default IconOrangeOne;