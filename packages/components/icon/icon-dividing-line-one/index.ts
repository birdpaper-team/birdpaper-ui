import type { App } from 'vue';
import _IconDividingLineOne from './icon-dividing-line-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDividingLineOne.name = getComponentsPrefix() + _IconDividingLineOne.name;

const IconDividingLineOne = Object.assign(_IconDividingLineOne, {
  install: (app: App) => {
    app.component(_IconDividingLineOne.name, _IconDividingLineOne);
  }
});

export default IconDividingLineOne;