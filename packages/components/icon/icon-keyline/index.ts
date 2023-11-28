import type { App } from 'vue';
import _IconKeyline from './icon-keyline.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconKeyline.name = getComponentsPrefix() + _IconKeyline.name;

const IconKeyline = Object.assign(_IconKeyline, {
  install: (app: App) => {
    app.component(_IconKeyline.name, _IconKeyline);
  }
});

export default IconKeyline;