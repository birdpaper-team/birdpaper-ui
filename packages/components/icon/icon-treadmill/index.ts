import type { App } from 'vue';
import _IconTreadmill from './icon-treadmill.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTreadmill.name = getComponentsPrefix() + _IconTreadmill.name;

const IconTreadmill = Object.assign(_IconTreadmill, {
  install: (app: App) => {
    app.component(_IconTreadmill.name, _IconTreadmill);
  }
});

export default IconTreadmill;