import type { App } from 'vue';
import _IconReject from './icon-reject.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconReject.name = getComponentsPrefix() + _IconReject.name;

const IconReject = Object.assign(_IconReject, {
  install: (app: App) => {
    app.component(_IconReject.name, _IconReject);
  }
});

export default IconReject;