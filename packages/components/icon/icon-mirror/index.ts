import type { App } from 'vue';
import _IconMirror from './icon-mirror.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMirror.name = getComponentsPrefix() + _IconMirror.name;

const IconMirror = Object.assign(_IconMirror, {
  install: (app: App) => {
    app.component(_IconMirror.name, _IconMirror);
  }
});

export default IconMirror;