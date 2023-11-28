import type { App } from 'vue';
import _IconFiveEllipses from './icon-five-ellipses.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFiveEllipses.name = getComponentsPrefix() + _IconFiveEllipses.name;

const IconFiveEllipses = Object.assign(_IconFiveEllipses, {
  install: (app: App) => {
    app.component(_IconFiveEllipses.name, _IconFiveEllipses);
  }
});

export default IconFiveEllipses;