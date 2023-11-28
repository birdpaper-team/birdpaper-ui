import type { App } from 'vue';
import _IconForbid from './icon-forbid.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconForbid.name = getComponentsPrefix() + _IconForbid.name;

const IconForbid = Object.assign(_IconForbid, {
  install: (app: App) => {
    app.component(_IconForbid.name, _IconForbid);
  }
});

export default IconForbid;