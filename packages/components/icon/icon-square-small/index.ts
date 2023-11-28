import type { App } from 'vue';
import _IconSquareSmall from './icon-square-small.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSquareSmall.name = getComponentsPrefix() + _IconSquareSmall.name;

const IconSquareSmall = Object.assign(_IconSquareSmall, {
  install: (app: App) => {
    app.component(_IconSquareSmall.name, _IconSquareSmall);
  }
});

export default IconSquareSmall;