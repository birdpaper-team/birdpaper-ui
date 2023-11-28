import type { App } from 'vue';
import _IconBigX from './icon-big-x.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBigX.name = getComponentsPrefix() + _IconBigX.name;

const IconBigX = Object.assign(_IconBigX, {
  install: (app: App) => {
    app.component(_IconBigX.name, _IconBigX);
  }
});

export default IconBigX;