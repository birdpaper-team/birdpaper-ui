import type { App } from 'vue';
import _IconDisabaledWeb from './icon-disabaled-web.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDisabaledWeb.name = getComponentsPrefix() + _IconDisabaledWeb.name;

const IconDisabaledWeb = Object.assign(_IconDisabaledWeb, {
  install: (app: App) => {
    app.component(_IconDisabaledWeb.name, _IconDisabaledWeb);
  }
});

export default IconDisabaledWeb;