import type { App } from 'vue';
import _IconRightOne from './icon-right-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRightOne.name = getComponentsPrefix() + _IconRightOne.name;

const IconRightOne = Object.assign(_IconRightOne, {
  install: (app: App) => {
    app.component(_IconRightOne.name, _IconRightOne);
  }
});

export default IconRightOne;