import type { App } from 'vue';
import _IconTaurus from './icon-taurus.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTaurus.name = getComponentsPrefix() + _IconTaurus.name;

const IconTaurus = Object.assign(_IconTaurus, {
  install: (app: App) => {
    app.component(_IconTaurus.name, _IconTaurus);
  }
});

export default IconTaurus;