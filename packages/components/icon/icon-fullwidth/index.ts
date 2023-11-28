import type { App } from 'vue';
import _IconFullwidth from './icon-fullwidth.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFullwidth.name = getComponentsPrefix() + _IconFullwidth.name;

const IconFullwidth = Object.assign(_IconFullwidth, {
  install: (app: App) => {
    app.component(_IconFullwidth.name, _IconFullwidth);
  }
});

export default IconFullwidth;