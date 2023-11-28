import type { App } from 'vue';
import _IconMoreOne from './icon-more-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMoreOne.name = getComponentsPrefix() + _IconMoreOne.name;

const IconMoreOne = Object.assign(_IconMoreOne, {
  install: (app: App) => {
    app.component(_IconMoreOne.name, _IconMoreOne);
  }
});

export default IconMoreOne;