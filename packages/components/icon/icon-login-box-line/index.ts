import type { App } from 'vue';
import _IconLoginBoxLine from './icon-login-box-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLoginBoxLine.name = getComponentsPrefix() + _IconLoginBoxLine.name;

const IconLoginBoxLine = Object.assign(_IconLoginBoxLine, {
  install: (app: App) => {
    app.component(_IconLoginBoxLine.name, _IconLoginBoxLine);
  }
});

export default IconLoginBoxLine;